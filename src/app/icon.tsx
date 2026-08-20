import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 15,
          fontWeight: 700,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          letterSpacing: '-0.04em',
          borderRadius: 7,
          border: '1.5px solid #22d3ee',
        }}
      >
        JP
      </div>
    ),
    { ...size }
  );
}
