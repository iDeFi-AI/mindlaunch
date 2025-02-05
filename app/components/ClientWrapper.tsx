'use client';

import { useState } from 'react';
import SpaceBackground from './SpaceBackground'; // Ensure correct filename!
import AIAgentInterface from './AIAgentInterface';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [narrativeStyle, setNarrativeStyle] = useState('MindLaunch Vision');

  return (
    <>
      {/* Render the SpaceBackground first */}
      <SpaceBackground />

      {/* Render other interactive client components */}
      <AIAgentInterface narrativeStyle={narrativeStyle} />

      {/* Wrap main content in a container that sits above the background */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
