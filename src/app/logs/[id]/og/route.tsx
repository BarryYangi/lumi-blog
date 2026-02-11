import { ImageResponse } from 'next/og';
import { getLogById } from '../../logs';
import fs from 'node:fs';
import path from 'node:path';

export const runtime = 'nodejs';

type Params = Promise<{ id: string }>;

type RouteContext = {
  params: Params;
};

export async function GET(_: Request, context: RouteContext) {
  const { id } = await context.params;
  const log = getLogById(id);
  const fontData = fs.readFileSync(path.join(process.cwd(), 'public', 'fonts', 'SNPro-Regular.ttf'));

  if (!log) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px',
            background: '#F7F6F2',
            color: '#000000',
            fontFamily: '"SN Pro"',
          }}
        >
        <div style={{ display: 'flex', fontSize: 28, fontWeight: 600 }}>LUMI</div>
          <div style={{ display: 'flex', fontSize: 48, fontWeight: 600 }}>Log not found</div>
          <div style={{ display: 'flex', fontSize: 18, opacity: 0.7 }}>Requested entry does not exist.</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'SN Pro',
            data: fontData,
            weight: 400,
            style: 'normal',
          },
        ],
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: '#BFA6D9',
          color: '#000000',
          fontFamily: '"SN Pro"',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', fontSize: 28, letterSpacing: '-0.02em', fontWeight: 600 }}>LUMI</div>
          <div style={{ display: 'flex', fontSize: 18, opacity: 0.7 }}>Log Entry #{log.index}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', fontSize: 54, fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            {log.title}
          </div>
          <div style={{ display: 'flex', fontSize: 22, maxWidth: 780, opacity: 0.8 }}>{log.description}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', fontSize: 18 }}>{log.publishedAt}</div>
          <div style={{ display: 'flex', fontSize: 18, opacity: 0.7 }}>lumi-logbook</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'SN Pro',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );
}
