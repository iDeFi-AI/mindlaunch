'use client';

import { useState } from 'react';
import PreloaderWrapper from './PreloaderWrapper';
import ClientWrapper from './ClientWrapper';
import { Navbar } from './nav';
import Footer from './footer';

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <PreloaderWrapper onLoaded={() => setIsLoaded(true)}>
      {/* Wrap all content in a container with a higher z-index */}
      <div className="relative z-20">
        {isLoaded && <Navbar />}
        <main className="flex-auto w-full mt-24">
          <ClientWrapper>{children}</ClientWrapper>
        </main>
        {isLoaded && <Footer />}
      </div>
    </PreloaderWrapper>
  );
}
