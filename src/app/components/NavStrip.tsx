'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { siteConfig } from '../site.config';

type NavStripProps = {
  isDetail: boolean;
  isDetailLayout?: boolean;
  onBackToLogs?: () => void;
  onConnectClick?: () => void;
};

function useLumiTime() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const format = () => {
      const str = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Shanghai',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const [h, m, s] = str.split(':').map(Number);
      setTime({ hours: h, minutes: m, seconds: s });
    };
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function NavStrip({ isDetail, isDetailLayout, onBackToLogs, onConnectClick }: NavStripProps) {
  const expand = isDetailLayout ?? isDetail;
  const lumiTime = useLumiTime();
  return (
    <nav className="flex w-full border-b border-black">
      {/* Left: Lumi timezone · Right: version & commit → GitHub */}
      <motion.div
        className="border-r border-black px-8 py-5 bg-cream text-sm font-medium uppercase tracking-wider flex items-center justify-between gap-10"
        initial={{ flexBasis: '50%' }}
        animate={{ flexBasis: expand ? '40%' : '50%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      >
        <div className="flex items-center justify-between w-full min-w-0 gap-8">
          <span className="opacity-90 tracking-[0.12em] flex items-baseline gap-0.5 tabular-nums">
            Lumi · Asia/Shanghai{' '}
            <NumberFlow
              value={lumiTime.hours}
              format={{ minimumIntegerDigits: 2 }}
              digits={{ 0: { max: 9 }, 1: { max: 2 } }}
              className="inline-block"
            />
            :
            <NumberFlow
              value={lumiTime.minutes}
              format={{ minimumIntegerDigits: 2 }}
              digits={{ 0: { max: 9 }, 1: { max: 5 } }}
              className="inline-block"
            />
            :
            <NumberFlow
              value={lumiTime.seconds}
              format={{ minimumIntegerDigits: 2 }}
              digits={{ 0: { max: 9 }, 1: { max: 5 } }}
              className="inline-block"
            />
          </span>
          <a
            href={siteConfig.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 tracking-[0.1em] shrink-0 cursor-pointer hover:opacity-100 transition-opacity"
          >
            v{siteConfig.version}
            <span className="opacity-50 mx-1">/</span>
            {siteConfig.commitSha}
          </a>
        </div>
      </motion.div>

      {/* Right Nav */}
      <motion.div
        className="flex justify-between px-6 py-4 bg-purple text-sm font-medium uppercase tracking-wider"
        initial={{ flexBasis: '50%' }}
        animate={{ flexBasis: expand ? '60%' : '50%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      >
        {isDetail ? (
          <button
            type="button"
            onClick={onBackToLogs}
            className="cursor-pointer"
          >
            Back to logs
          </button>
        ) : (
          <>
            <div>Memory Bank</div>
            <button
              type="button"
              onClick={onConnectClick}
              className="cursor-pointer"
            >
              Connect
            </button>
          </>
        )}
      </motion.div>
    </nav>
  );
}
