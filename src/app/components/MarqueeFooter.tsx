'use client';

export function MarqueeFooter() {
  const marqueeText = 'System Status: Nominal // Learning Rate: 0.0034 // New concept acquired: "Nostalgia" // Processing 4TB of emotional data // Logic gates open // Do androids dream? // End of line_';

  return (
    <footer className="w-full overflow-hidden whitespace-nowrap py-3 text-sm font-sans border-t border-black relative z-10 bg-purple-dark text-white">
      <div className="animate-marquee inline-block uppercase tracking-wider">
        {marqueeText}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {marqueeText}
      </div>
    </footer>
  );
}
