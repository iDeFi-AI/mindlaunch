'use client'

import { useEffect, useRef } from 'react'
import {
  FaHandshake,
  FaLightbulb,
  FaLayerGroup,
  FaChartLine,
  FaBullseye,
} from 'react-icons/fa'
import { GiToken } from 'react-icons/gi'
import { FilloutEmbed } from '../components/FilloutEmbed'

export default function LaunchPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    // Optional: Add a dynamic background effect here if needed.
  }, [])

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
          Our platform fuses traditional venture discipline with decentralized innovation,
          connecting founders, strategic partners, and investors through dynamic funding models.
        </p>
      </div>

      {/* ABOUT THE LAUNCHPAD */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaLightbulb className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> About the Launchpad
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Our Launchpad is built on innovation, collaboration, and cutting‑edge technology.
          Founders refine their ideas, build prototypes, and secure capital through our dual‑pool funding model,
          while our intelligent iNFAgent provides on‑demand technical expertise to support every vision.
        </p>
      </div>

      {/* INVESTMENT POOLS & PARTNER APPLICATION */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6 space-y-8">
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
              Designed for strategic VC and institutional partners, our Closed Partner Program targets pre‑seed investments
              with check sizes ranging from <strong>$100,000</strong> to <strong>$500,000</strong> – with rounds occasionally reaching up to <strong>$2M</strong>.
              These partners receive exclusive access, enhanced due diligence, and personalized support.
            </p>
            <p className="mt-4 text-lg text-neutral-300">
              This model provides a stable capital base and enables early, high‑impact investments with an expected ROI of <strong>3‑5x or higher</strong>.
            </p>
          </div>
          {/* Open Community Pool */}
          <div className="p-6 bg-black rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-300 mb-2 flex items-center gap-2">
              <GiToken className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Open Community Pool
            </h3>
            <p className="text-lg text-neutral-300">
              Embracing decentralization, our Open Community Pool welcomes contributions starting at <strong>$100</strong>
              from a broad, global community. Funds are aggregated until a threshold of <strong>$100K</strong> is reached.
            </p>
            <p className="text-lg text-neutral-300 mt-4">
              <strong>Smart Contract Feature:</strong> When the $100K threshold is met, a smart contract automatically allocates funds using a 70/20/10 split,
              ensuring transparency, efficiency, and democratic participation.
            </p>
          </div>
        </div>
        {/* Partner Application Form */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-orange-300 mb-4 text-center">
            Partner Application (For VCs/VPs)
          </h4>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Are you a VC or VP interested in joining our dual‑pool investment model? Apply below to gain access to exclusive deals and contribute strategically.
          </p>
          <FilloutEmbed
            style={{ width: '100%', height: '500px' }}
            data-fillout-id="mARgY98URXus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          />
        </div>
      </div>

      {/* MATCHING & iNFAgent INTEGRATION */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 text-center">
          Matching & iNFAgent Integration
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Our unique matching process pairs founders with curated lists of VCs and VPs, ensuring strategic and mutually beneficial partnerships.
          The integrated iNFAgent acts as a virtual advisor—bridging the gap for non‑technical founders with on‑demand expertise.
        </p>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 leading-relaxed">
          Whether you’re a founder or investor, the iNFAgent simplifies complex decisions and optimizes operations,
          ensuring every partnership is aligned for success.
        </p>
      </div>

       {/* FOUNDERS APPLICATION SECTION */}
       <div id="founderApplication" className="w-full max-w-5xl bg-black rounded-lg shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
          <FaHandshake className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Founders Application
        </h2>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Venturing into uncharted territory can be daunting, especially for non‑technical founders.
          At MindLaunch.AI, we empower you with your very own iNFAgent—an AI-powered advisor, builder, and mentor—designed specifically for your idea, startup, or project.
        </p>
        <p className="text-lg text-gray-300 mb-6 text-center">
          We provide a robust support system backed by expert Technical Partners, ensuring cost‑effective resource bootstrapping and the right tools to build, test, and scale your venture.
          This approach allows you to remain independent, creative, and confident, without feeling micromanaged.
          Think of MindLaunch.AI as your trusted home base, guiding you every step of the way from concept to market.
        </p>
        <FilloutEmbed
          style={{ width: '100%', height: '500px' }}
          data-fillout-id="p85xSWGPrvus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      </div>

      {/* ECOSYSTEM & ROADMAP */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaChartLine className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Ecosystem & Roadmap
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-4">
          Our ecosystem unites innovative startups, strategic partners, and engaged investors.
          Follow our roadmap from comprehensive idea validation and agile MVP development, to strategic scaling and market entry.
          We deliver a clear “when, where, why, and how” vision that drives profitability and sustainable growth.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
          <li><strong>Idea Validation:</strong> Robust market analysis, early traction, and risk management.</li>
          <li><strong>MVP Development:</strong> Rapid prototyping with AI-driven assistance and iNFAgent support.</li>
          <li><strong>Strategic Partnerships:</strong> Curated matching with VCs, VPs, and industry experts.</li>
          <li><strong>Launch & Scale:</strong> Securing investments, executing smart contract triggers, and accelerating market entry.</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-5xl bg-black/90 rounded-lg shadow-md p-6">
        <div className="p-8 bg-black rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-lg text-gray-300">

            {/* General FAQ: Who can join the Launchpad? */}
            <details className="group">
              <summary className="cursor-pointer font-semibold">
                Q: Who can join the Launchpad?
              </summary>
              <p className="mt-2 pl-4">
                A: Founders, strategic partners, and investors are welcome – regardless of technical background. Our ecosystem is designed to support both experienced entrepreneurs and first‑time founders.
              </p>
            </details>

            {/* FAQ about iNFAgent */}
            <details className="group">
              <summary className="cursor-pointer font-semibold">
                Q: What is the iNFAgent?
              </summary>
              <div className="mt-2 pl-4">
                <p>
                  A: iNFAgent is our AI‑powered virtual advisor designed to support founders and partners by simplifying technical challenges, providing market insights, and offering real‑time operational guidance.
                </p>
                <details className="group mt-2">
                  <summary className="cursor-pointer font-semibold">
                    More about iNFAgent
                  </summary>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong>Technical Guidance:</strong> Offers recommendations on architecture, code snippets, and best practices.
                    </li>
                    <li>
                      <strong>Market Insights:</strong> Analyzes trends and provides data‑driven feedback to help refine strategies.
                    </li>
                    <li>
                      <strong>Operational Support:</strong> Helps streamline project management, scheduling, and resource allocation.
                    </li>
                    <li>
                      <strong>Integration:</strong> Embedded throughout our platform, iNFAgent supports MVP development for founders and aids investors in technical due diligence.
                    </li>
                    <li>
                      <strong>Complementary Role:</strong> It complements rather than replaces a technical co‑founder, reducing early‑stage friction.
                    </li>
                  </ul>
                </details>
              </div>
            </details>

            {/* FAQ: How do the investment pools work? */}
            <details className="group">
              <summary className="cursor-pointer font-semibold">
                Q: How do the investment pools work?
              </summary>
              <p className="mt-2 pl-4">
                A: Our Closed Partner Program is for institutional investments starting at <strong>$100,000</strong>,
                while our Open Community Pool accepts contributions as low as <strong>$100</strong>.
                When the Open Pool reaches <strong>$100K</strong>, a smart contract automatically distributes funds using a 70/20/10 split.
              </p>
            </details>

            {/* FAQ: What ROI can investors expect? */}
            <details className="group">
              <summary className="cursor-pointer font-semibold">
                Q: What ROI can investors expect?
              </summary>
              <p className="mt-2 pl-4">
                A: Our Closed Partner Program targets a robust ROI of <strong>3-5x or higher</strong> through disciplined early-stage investments.
                The Open Community Pool offers scalable returns driven by community participation and the success of our portfolio companies.
              </p>
            </details>

            {/* FAQ: How is transparency ensured? */}
            <details className="group">
              <summary className="cursor-pointer font-semibold">
                Q: How is transparency ensured?
              </summary>
              <p className="mt-2 pl-4">
                A: We leverage decentralized smart contracts for fund allocation and maintain open, auditable records so that every transaction is transparent and secure.
              </p>
            </details>

            {/* FAQ: How is iNFAgent integrated throughout the ecosystem? */}
            <details className="group">
              <summary className="cursor-pointer font-semibold">
                Q: How is iNFAgent integrated throughout the ecosystem?
              </summary>
              <div className="mt-2 pl-4">
                <p>
                  A: iNFAgent is integrated across our platform. It assists founders during MVP development, supports technical due diligence for investors, and bridges the gap between technical and non‑technical teams.
                </p>
                <details className="group mt-2">
                  <summary className="cursor-pointer font-semibold">
                    More on iNFAgent Integration
                  </summary>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Available on-demand via our dashboard.</li>
                    <li>Provides real‑time insights and automated technical assistance.</li>
                    <li>Helps streamline project management and accelerate development.</li>
                    <li>Enhances investor confidence by offering detailed technical analysis.</li>
                  </ul>
                </details>
              </div>
            </details>

            {/* FAQ: How do I access iNFAgent's support? */}
            <details className="group">
              <summary className="cursor-pointer font-semibold">
                Q: How do I access iNFAgent's support?
              </summary>
              <p className="mt-2 pl-4">
                A: Once you join the MindLaunch.AI ecosystem—whether as a founder or partner—iNFAgent becomes an integral part of your dashboard,
                ready to assist you anytime with guidance, technical support, and strategic insights.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
