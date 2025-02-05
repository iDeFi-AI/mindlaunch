'use client';

import { useState } from 'react';
import SpaceBackground from './SpaceBackground'; // Ensure correct filename!
import AIAgentInterface from './AIAgentInterface';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  // Set the primary color for the SpaceBackground.
  // For a light theme, we want black stars.
  const [matrixColor, setMatrixColor] = useState('#000000');
  const [narrativeStyle, setNarrativeStyle] = useState('MindLaunch Vision');

  return (
    <>
      {/* Render the SpaceBackground first; its canvas uses a high-specificity class */}
      <SpaceBackground matrixColor={matrixColor} setMatrixColor={setMatrixColor} />

      {/* Render other interactive client components */}
      <AIAgentInterface narrativeStyle={narrativeStyle} />

      {/* Wrap main content in a container that sits above the background */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
