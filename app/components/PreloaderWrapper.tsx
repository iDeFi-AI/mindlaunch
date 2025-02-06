'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from 'public/mindlaunch-logo.png'; // Your logo
import preloaderGif from 'public/space.gif'; // Your preloader GIF

type PreloaderWrapperProps = {
  children: React.ReactNode;
  onLoaded?: () => void;
};

export default function PreloaderWrapper({ children, onLoaded }: PreloaderWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay removal of the preloader (and start fade-in) after 3 seconds.
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoaded) onLoaded();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="relative min-h-screen">
      {isLoading ? (
        // Preloader overlay covering the viewport.
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50">
          <div className="absolute inset-0">
            <Image
              src={preloaderGif}
              alt="Loading Background"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          {/* The logo container is initially hidden (opacity: 0) and will fade in */}
          <div className="z-10 logo-fade-in" style={{ opacity: 0 }}>
            <Image
              src={logo}
              alt="MindLaunch.ai Logo"
              width={400}
              height={150}
              className="object-contain"
            />
            <p className="text-center">Private Equity & Venture Capital</p>
          </div>
        </div>
      ) : (
        // When not loading, render children with a fade-in effect.
        <div className="animate-fadeIn">{children}</div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeInLogo {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        /* Apply the animation to the logo container */
        .logo-fade-in {
          animation: fadeInLogo 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
