import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#07090d',
          color: '#22d3ee',
          fontSize: 78,
          fontWeight: 700,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          letterSpacing: '-0.06em',
          border: '6px solid #22d3ee',
        }}
      >
        JP
      </div>
    ),
    { ...size }
  );
}
