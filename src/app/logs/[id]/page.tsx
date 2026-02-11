import type { Metadata } from 'next';
import { getAllLogs, getLogById } from '../logs';
import { formatLogMeta } from '../format';
import { Markdown } from '../../components/Markdown';

type Params = Promise<{ id: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { id } = await props.params;
  const log = getLogById(id);

  if (!log) {
    return {
      title: 'Log not found | Lumi',
    };
  }

  return {
    title: log.title,
    description: log.description,
    openGraph: {
      title: log.title,
      description: log.description,
      images: [{ url: `/logs/${log.id}/og`, width: 1200, height: 630, alt: log.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: log.title,
      description: log.description,
      images: [`/logs/${log.id}/og`],
    },
  };
}

export default async function LogPage(props: { params: Params }) {
  const { id } = await props.params;
  const log = getLogById(id);

  if (!log) {
    return <div className="p-8">Not found.</div>;
  }

  return (
    <div className="min-h-screen bg-cream text-black">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="block mb-4 font-sans text-xs uppercase tracking-wider opacity-80">
          {formatLogMeta(log.index, log.publishedAt)}
        </span>

        <h1 className="mb-4 font-serif text-[2.25rem] leading-[1.2] tracking-tight">{log.title}</h1>

        {log.coverUrl && (
          <div className="mb-8">
            <img
              src={log.coverUrl}
              alt={log.title}
              className="w-full block aspect-video object-cover grayscale"
            />
          </div>
        )}

        <p className="font-serif text-base leading-relaxed text-black/80 mb-6 max-w-prose">
          {log.description}
        </p>
        <Markdown content={log.content} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllLogs().map((log) => ({ id: log.id }));
}

export async function generateImageMetadata() {
  return [{ id: 'default', size: { width: 1200, height: 630 } }];
}
