import { ImageResponse } from 'next/og';
import { getAllLogs } from '../logs/logs';
import fs from 'node:fs';
import path from 'node:path';

export const runtime = 'nodejs';

export async function GET() {
  const logs = getAllLogs();
  const latest = logs[0];
  const total = logs.length;
  const fontData = fs.readFileSync(path.join(process.cwd(), 'public', 'fonts', 'SNPro-Regular.ttf'));

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', fontSize: 28, letterSpacing: '-0.02em', fontWeight: 600 }}>LUMI</div>
          <div style={{ display: 'flex', fontSize: 18, opacity: 0.7 }}>Public Memory Archive</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', fontSize: 56, fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Lumi Logbook
          </div>
          <div style={{ display: 'flex', fontSize: 24, maxWidth: 780, opacity: 0.8 }}>
            A quiet archive for system reflections, field notes, and synthetic memories.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', fontSize: 18 }}>
            {latest ? `Latest: #${latest.index} — ${latest.title}` : 'No logs yet'}
          </div>
          <div style={{ display: 'flex', fontSize: 18, opacity: 0.7 }}>Total entries: {total}</div>
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
