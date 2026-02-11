import fs from 'node:fs';
import path from 'node:path';

export type LogFrontmatter = {
  index: number;
  publishedAt: string; // YYYY-MM-DD
  coverUrl?: string;
  title: string;
  description: string;
};

export type LogEntry = LogFrontmatter & {
  id: string;
  content: string;
};

const LOGS_DIR = path.join(process.cwd(), 'src', 'content', 'logs');

const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---\s*\n?/;

function parseFrontmatter(raw: string): { meta: LogFrontmatter; content: string } {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    throw new Error('Missing frontmatter');
  }

  const meta: Record<string, string> = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const sep = trimmed.indexOf(':');
    if (sep === -1) continue;
    const key = trimmed.slice(0, sep).trim();
    let value = trimmed.slice(sep + 1).trim();
    value = value.replace(/^"|"$/g, '').replace(/^'|'$/g, '');
    meta[key] = value;
  }

  const frontmatter: LogFrontmatter = {
    index: Number(meta.index ?? 0),
    publishedAt: meta.publishedAt ?? '',
    coverUrl: meta.coverUrl ? meta.coverUrl : undefined,
    title: meta.title ?? '',
    description: meta.description ?? '',
  };

  return { meta: frontmatter, content: raw.slice(match[0].length).trim() };
}

export function getAllLogs(): LogEntry[] {
  if (!fs.existsSync(LOGS_DIR)) return [];
  const files = fs.readdirSync(LOGS_DIR).filter((file) => file.endsWith('.md'));
  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(LOGS_DIR, file), 'utf8');
    const { meta, content } = parseFrontmatter(raw);
    const id = path.basename(file, '.md');
    return { id, ...meta, content };
  });

  return items.sort((a, b) => b.index - a.index);
}

export function getLogById(id: string): LogEntry | null {
  const filePath = path.join(LOGS_DIR, `${id}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { meta, content } = parseFrontmatter(raw);
  return { id, ...meta, content };
}
