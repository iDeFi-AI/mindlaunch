'use client'

import { useEffect, useRef } from 'react';
import {
  FaHandshake,
  FaLightbulb,
  FaLayerGroup,
  FaChartLine,
  FaBullseye,
  FaRegCalendarAlt,
  FaComments,
} from 'react-icons/fa';
import { GiToken } from 'react-icons/gi';
import { FilloutEmbed } from '../components/FilloutEmbed'; // updated path

export default function LaunchPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Optional: Add a dynamic background effect here if needed.
  }, []);

  return (
    <section className="relative min-h-screen p-8 flex flex-col items-center text-orange-300 space-y-16">
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

      {/* HEADER / OVERVIEW */}
      <div className="w-full max-w-4xl text-center bg-black rounded-lg shadow-lg p-6 mt-24">
        <h1 className="text-5xl font-bold tracking-tight text-orange-300">
          Welcome to the Launchpad
        </h1>
        <p className="mt-4 text-lg text-neutral-300">
          At MindLaunch.ai, we transform visionary ideas into investor‑ready ventures.
          Our launchpad connects founders, strategic partners, and investors while showcasing two distinct funding models.
        </p>
      </div>

      {/* ABOUT THE LAUNCHPAD */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaLightbulb className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> About the Launchpad
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Our platform is built on innovation and collaboration, offering a comprehensive environment where founders refine ideas,
          develop prototypes, and secure the capital necessary for scaling. With cutting-edge tools and a structured process,
          we empower startups to reach their full potential.
        </p>
      </div>

      {/* INVESTMENT POOLS */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 text-center">
          Our Investment Pools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Closed Partner Program */}
          <div className="p-6 bg-black rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-300 mb-2 flex items-center gap-2">
              <FaLayerGroup className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Closed Partner Program
            </h3>
            <p className="text-lg text-neutral-300">
              Designed for strategic partners, this program targets pre‑seed investments with check sizes typically ranging from <strong>$100,000</strong> to <strong>$500,000</strong> – with rounds sometimes up to <strong>$2M</strong>.
              Partners investing over $100K benefit from exclusive access, additional due diligence, and personalized support to ensure optimal matching.
            </p>
          </div>
          {/* Open Community Pool */}
          <div className="p-6 bg-black rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-300 mb-2 flex items-center gap-2">
              <GiToken className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Open Community Pool
            </h3>
            <p className="text-lg text-neutral-300">
              Embracing a decentralized approach, this pool accepts contributions from as low as <strong>$1,000</strong> up to just under <strong>$100,000</strong>.
              Utilizing USDC and smart contract conversion, funds are automatically distributed once the pool reaches its threshold, democratizing access for a broader community.
            </p>
          </div>
        </div>
      </div>

      {/* MATCHING & iNFAgent INTEGRATION */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 text-center">
          Matching & iNFAgent Integration
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Our unique matching process pairs founders with curated lists of VCs and VPs, ensuring strategic and mutually beneficial partnerships.
        </p>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 leading-relaxed">
          The integrated iNFAgent acts as a virtual advisor, streamlining collaboration and providing critical insights for both founders and investors.
        </p>
      </div>

      {/* ECOSYSTEM & ROADMAP */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaChartLine className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Ecosystem & Roadmap
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-4">
          Our ecosystem connects innovative startups with strategic partners, investors, and expert mentors.
          Follow our roadmap from rigorous idea validation to agile MVP development and strategic scaling.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
          <li><strong>Idea Validation:</strong> Comprehensive market analysis and early traction metrics.</li>
          <li><strong>MVP Development:</strong> Agile prototyping and technical execution.</li>
          <li><strong>Strategic Partnerships:</strong> Curated matching with VCs, VPs, and industry experts.</li>
          <li><strong>Launch & Scale:</strong> Securing investments and accelerating market entry.</li>
        </ul>
      </div>

      {/* TESTIMONIALS & FAQ */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonials */}
        <div className="bg-black/90 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 text-orange-300 flex items-center justify-center gap-2 text-center">
            <FaBullseye className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Testimonials
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-2">
            "MindLaunch.AI transformed our approach to innovation. The integrated iNFAgent is a game-changer."
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            "The launchpad's ecosystem and curated partnerships enabled us to scale faster than ever."
          </p>
        </div>
        {/* FAQ */}
        <div className="bg-black/90 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 text-orange-300 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-lg text-gray-300">
            <div>
              <strong>Q: Who can join the launchpad?</strong>
              <p>A: Founders, strategic partners, and investors are welcome.</p>
            </div>
            <div>
              <strong>Q: How does the matching process work?</strong>
              <p>
                A: Both founders and investors receive curated lists to select their preferred matches, ensuring mutually beneficial partnerships.
              </p>
            </div>
            <div>
              <strong>Q: What is the role of the iNFAgent?</strong>
              <p>
                A: The iNFAgent serves as a virtual advisor to streamline collaboration and accelerate growth for both non‑technical founders and investors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION - FORM EMBED (Founders Application) */}
      <div id="founderForm" className="max-w-5xl mx-auto bg-black rounded-lg shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
          <FaHandshake className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Founders Application
        </h2>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Are you a visionary founder with a disruptive idea? Complete the form below to apply and join our launchpad.
        </p>
        <FilloutEmbed
          style={{ width: '100%', height: '500px' }}
          data-fillout-id="p85xSWGPrvus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      </div>

      {/* CALL TO ACTION - FORM EMBED (Partner Application) */}
      <div id="partnerForm" className="max-w-5xl mx-auto bg-black rounded-lg shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
          <FaHandshake className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Partner Application
        </h2>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Are you a VC or VP interested in strategic investments? Complete the form below to join our Closed Partner Program.
        </p>
        <FilloutEmbed
          style={{ width: '100%', height: '500px' }}
          data-fillout-id="mARgY98URXus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      </div>
  </section>
);
}
