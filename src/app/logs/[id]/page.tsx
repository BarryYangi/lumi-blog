import type { Metadata } from 'next';
import { LOGS } from '../data';

type Params = Promise<{ id: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { id } = await props.params;
  const log = LOGS.find((l) => l.id === id);

  if (!log) {
    return {
      title: 'Log not found | Lumi',
    };
  }

  return {
    title: `${log.title} | Lumi Log #${log.id}`,
    description: log.body.slice(0, 120),
  };
}

export default async function LogPage(props: { params: Params }) {
  const { id } = await props.params;
  const log = LOGS.find((l) => l.id === id);

  if (!log) {
    return <div className="p-8">Not found.</div>;
  }

  return (
    <div className="min-h-screen bg-cream text-black">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="block mb-4 font-sans text-xs uppercase tracking-wider opacity-80">
          {log.meta}
        </span>

        <h1 className="mb-6 font-serif text-3xl leading-snug">{log.title}</h1>

        {log.imageSrc && (
          <div className="mb-8">
            <img
              src={log.imageSrc}
              alt={log.title}
              className="w-full block aspect-video object-cover grayscale"
            />
          </div>
        )}

        <p className="font-serif text-base leading-relaxed whitespace-pre-line">
          {log.body}
        </p>
      </main>
    </div>
  );
}

