'use client'

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import {
  FaHandshake,
  FaLightbulb,
  FaLayerGroup,
  FaChartLine,
  FaRocket,
  FaBullseye,
} from 'react-icons/fa';
import { GiToken } from 'react-icons/gi';

export default function LaunchPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Optional: Add a dynamic background effect here if needed.
  }, []);

  return (
    <section className="relative min-h-screen p-8 flex flex-col items-center text-orange-300">
      {/* Optional background canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* =======================
          HEADER / OVERVIEW
         ======================= */}
      <div className="w-full max-w-4xl text-center mb-12 mt-24">
        <div className="w-full p-6 bg-black rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold tracking-tight text-orange-300">
            Welcome to the Launchpad
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            At MindLaunch.ai, we transform visionary ideas into investor‑ready ventures.
            Our launchpad empowers founders, partners, VCs, and VPs to connect, collaborate, and accelerate innovation.
          </p>
        </div>
      </div>

      {/* =======================
          ABOUT THE LAUNCHPAD
         ======================= */}
      <div className="w-full max-w-5xl mb-12 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaLightbulb /> About the Launchpad
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Our platform is built on a foundation of innovation and collaboration.
          We provide a holistic environment where founders refine their ideas, build prototypes, and secure capital.
          Our structured process ensures that every startup is equipped with the resources needed to scale.
        </p>
      </div>

      {/* =======================
          INVESTMENT POOLS
         ======================= */}
      <div className="w-full max-w-5xl mb-12 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 text-center">
          Our Investment Pools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Closed Pool for Partners */}
          <div className="p-6 bg-black rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-300 mb-2 flex items-center gap-2">
              <FaLayerGroup /> Partner Pool
            </h3>
            <p className="text-lg text-neutral-300">
              Exclusively designed for strategic partners, this pool provides access to larger, high-impact investments and curated opportunities.
              By joining our closed partner network, investors gain early access to innovative projects and personalized support.
            </p>
          </div>
          {/* Open Fractional Investment Pool */}
          <div className="p-6 bg-black rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-300 mb-2 flex items-center gap-2">
              <GiToken /> Open Fractional Pool
            </h3>
            <p className="text-lg text-neutral-300">
              For those looking to invest smaller amounts—typically between $100 and $1,000—our open pool allows you to participate on a fractional basis.
              This democratizes access and empowers a broader community to support breakthrough ideas.
            </p>
          </div>
        </div>
      </div>

      {/* =======================
          MATCHING & iNFAgent INTEGRATION
         ======================= */}
      <div className="w-full max-w-5xl mb-12 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 text-center">
          Matching & iNFAgent Integration
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          What sets us apart is our unique matching process.
          Founders are provided with a curated list of VCs and VPs,
          while investors receive a corresponding list of high-potential founders.
          This two-way selection process ensures the right fit for both sides.
        </p>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 leading-relaxed">
          Furthermore, our integrated iNFAgent acts as a virtual advisor,
          helping startups, founders, and partners collaborate seamlessly.
          The iNFAgent assists non‑technical founders in accelerating their growth,
          while providing VCs and VPs with deeper insights and enhanced decision-making support.
        </p>
      </div>

      {/* =======================
          FILLOUT FORM EMBED
         ======================= */}
      <div id="pitchSubmission" className="w-full max-w-5xl mb-16 bg-black rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-orange-300">
          Join the Launchpad
        </h2>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Whether you’re a founder or a strategic investor, complete the form below to get started.
        </p>
        <div
          style={{ width: '100%', height: '500px' }}
          data-fillout-id="p85xSWGPrvus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        ></div>
        <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
      </div>
    </section>
  );
}
