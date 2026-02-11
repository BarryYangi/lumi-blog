'use client';

import { motion } from 'framer-motion';

type HeaderProps = {
  isDetail: boolean;
};

export function Header({ isDetail }: HeaderProps) {
  return (
    <header className="flex w-full border-b border-black">
      {/* Left Header */}
      <motion.div
        className="left-panel border-r border-black h-20 flex items-center justify-between p-6 bg-cream"
        initial={{ flexBasis: '50%' }}
        animate={{ flexBasis: isDetail ? '40%' : '50%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      >
        <div className="flex items-center gap-2.5 font-medium text-xl">
          <div className="relative w-6 h-6 bg-black rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
          </div>
          Lumi AI Interface
        </div>
      </motion.div>

      {/* Right Header */}
      <motion.div
        className="right-header h-20 flex items-center justify-between p-6 bg-purple"
        initial={{ flexBasis: '50%' }}
        animate={{ flexBasis: isDetail ? '60%' : '50%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      >
        <div className="flex gap-4">
          <span>✦</span>
          <span>●</span>
        </div>
      </motion.div>
    </header>
  );
}
