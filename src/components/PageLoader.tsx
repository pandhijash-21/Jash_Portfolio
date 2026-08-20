'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const TARGET = 'Jash Pandhi';
const BITS = '01';

function randomBit() {
  return BITS[Math.floor(Math.random() * BITS.length)];
}

function scrambleFrom(lockedCount: number) {
  return TARGET.split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      if (index < lockedCount) return char;
      return randomBit();
    })
    .join('');
}

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  const [lockedCount, setLockedCount] = useState(0);
  const [display, setDisplay] = useState('01010 10101');
  const [status, setStatus] = useState('decrypting identity');
  const [rain, setRain] = useState<string[][]>([]);

  const columns = useMemo(
    () => Array.from({ length: 22 }, (_, i) => ({ id: i, left: (i / 22) * 100 })),
    []
  );

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains('light'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setRain(columns.map(() => Array.from({ length: 16 }, () => randomBit())));

    const rainTimer = window.setInterval(() => {
      setRain((prev) =>
        prev.map((col) => {
          const next = [...col];
          next.pop();
          next.unshift(randomBit());
          return next;
        })
      );
    }, 90);

    return () => window.clearInterval(rainTimer);
  }, [columns]);

  useEffect(() => {
    const scrambleTimer = window.setInterval(() => {
      setDisplay(scrambleFrom(lockedCount));
    }, 42);

    return () => window.clearInterval(scrambleTimer);
  }, [lockedCount]);

  useEffect(() => {
    const startDelay = 280;
    const step = 110;
    const timers: number[] = [];

    TARGET.split('').forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          setLockedCount(index + 1);
        }, startDelay + index * step)
      );
    });

    const decodedAt = startDelay + TARGET.length * step;
    timers.push(
      window.setTimeout(() => {
        setDisplay(TARGET);
        setStatus('access granted');
      }, decodedAt + 80)
    );
    timers.push(
      window.setTimeout(() => {
        setIsLoading(false);
      }, decodedAt + 900)
    );

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, []);

  const decoded = lockedCount >= TARGET.length;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className={`fixed inset-0 z-[9999] overflow-hidden ${
            isLightMode ? 'bg-[#eef1f4] text-[#0f766e]' : 'bg-[#07090d] text-cyan-400'
          }`}
        >
          <div className="absolute inset-0 pointer-events-none opacity-25">
            {columns.map((col, colIndex) => (
              <div
                key={col.id}
                className="absolute top-0 font-mono text-[10px] leading-4 tracking-widest"
                style={{ left: `${col.left}%` }}
              >
                {(rain[colIndex] || []).map((bit, rowIndex) => (
                  <div key={`${col.id}-${rowIndex}`} className="opacity-80">
                    {bit}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase mb-6 opacity-70">
              {'> '}
              {status}
              <span className="animate-pulse">_</span>
            </p>

            <h1 className="font-mono text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.12em] text-center">
              {display.split('').map((char, index) => (
                <span
                  key={`${index}-${char}`}
                  className={
                    index < lockedCount || decoded
                      ? isLightMode
                        ? 'text-[#111827]'
                        : 'text-white'
                      : ''
                  }
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>

            <p className="font-mono text-xs mt-8 opacity-50 tracking-widest">
              {decoded ? '01001010 01010000' : '01001010 01100001 01110011 01101000'}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
