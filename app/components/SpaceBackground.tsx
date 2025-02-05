'use client';

import Image from 'next/image';

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <Image
        src="/background.jpg" // Replace with your background image path (e.g., /space-background.jpg)
        alt="Responsive Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
