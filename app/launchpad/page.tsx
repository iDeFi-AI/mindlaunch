'use client'

import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Importing icons for visual emphasis
import {
  FaExternalLinkAlt,
  FaBolt,
  FaHandshake,
  FaChartLine,
  FaRobot,
  FaLayerGroup,
  FaWallet,
  FaLightbulb,
} from 'react-icons/fa';
import { GiToken } from 'react-icons/gi';

export default function InvestPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Optional: Add a dynamic background effect here if needed.
  }, []);

  return (
    <section className="relative min-h-screen p-8 flex flex-col items-center text-white">
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
        <div className="flex flex-col items-center">
          {/* Header content in a black box */}
          <div className="w-full max-w-3xl p-6 bg-black rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold tracking-tight mt-6 mb-4 text-orange-300">
              Invest in Innovation
            </h1>
            <p className="text-lg text-neutral-300 mb-6">
              MindLaunch.ai offers a full-spectrum venture capital platform—investing in pre-seed startups, token shares, and growth-stage companies—all powered by AI-driven trading bots.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/investment-deck.pdf" // Update with your investment deck path
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                View Investment Deck
              </a>
              <a
                href="/contact" // Update with your contact or pitch submission page
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Submit Your Pitch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =======================
          INVESTMENT PHILOSOPHY
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center gap-2">
          <FaLightbulb /> OUR INVESTMENT PHILOSOPHY
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          We invest in groundbreaking ideas at every stage—from pre-seed startups with disruptive concepts to later-stage companies leveraging tokenized assets. Our unique platform integrates automated trading bots that manage token shares, enabling us to capture market opportunities and maximize returns. At MindLaunch.ai, we believe in fostering innovation through strategic capital, technical expertise, and a collaborative spirit.
        </p>
      </div>

      {/* =======================
          INVESTMENT STAGES
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center gap-2">
          <FaWallet /> INVESTMENT STAGES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-300 text-lg">
          <div className="p-4 bg-black rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaChartLine className="text-orange-400" /> Pre-Seed
            </h3>
            <p>
              We back visionary founders at the earliest stages—providing seed capital, mentorship, and resources to transform innovative ideas into market-ready solutions.
            </p>
          </div>
          <div className="p-4 bg-black rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GiToken className="text-orange-400" /> Token Shares
            </h3>
            <p>
              Leveraging blockchain technology, we invest in tokenized assets and shares, opening up new pathways for liquidity and dynamic asset management.
            </p>
          </div>
          <div className="p-4 bg-black rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaLayerGroup className="text-orange-400" /> Growth & Scale
            </h3>
            <p>
              For later-stage companies, we provide growth capital and strategic guidance—fostering scalability, market expansion, and long-term value creation.
            </p>
          </div>
        </div>
      </div>

      {/* =======================
          AI-POWERED TRADING BOTS
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center gap-2">
          <FaRobot /> AI-Powered Trading Bots
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-4">
          Our proprietary trading bots leverage real-time market data, machine learning, and algorithmic trading strategies to monitor token markets and optimize our investment portfolio. This innovative approach helps us capture short-term gains while sustaining long-term growth.
        </p>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Whether it’s through automated token swaps, arbitrage, or portfolio rebalancing, our system is designed to adapt dynamically—ensuring we stay ahead in an ever-evolving financial landscape.
        </p>
      </div>

      {/* =======================
          FULL SPECTRUM VC SOLUTIONS
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center gap-2">
          <FaHandshake /> FULL SPECTRUM VC SOLUTIONS
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-neutral-200 space-y-3">
          <li>
            <strong>Early-Stage Investments:</strong> Supporting pre-seed and seed-stage startups with capital, mentorship, and access to our technological ecosystem.
          </li>
          <li>
            <strong>Tokenized Capital:</strong> Investing in token shares and digital assets, creating liquidity and unlocking new value propositions.
          </li>
          <li>
            <strong>Growth & Expansion:</strong> Providing strategic growth capital and operational support to scale promising ventures.
          </li>
          <li>
            <strong>Operational Excellence:</strong> Utilizing AI-driven tools and trading bots to enhance decision-making and maximize returns.
          </li>
          <li>
            <strong>Collaborative Ecosystem:</strong> Fostering long-term partnerships and a collaborative network that spans the full lifecycle of innovation.
          </li>
        </ul>
      </div>

      {/* =======================
          CONTACT / COLLABORATE
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg text-center shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-300 flex items-center justify-center gap-2">
          <FaHandshake /> Collaborate with Us
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 mb-6">
          Ready to invest, partner, or explore groundbreaking opportunities in AI, blockchain, quantum technologies, and tokenized assets? Let’s connect and build the future together.
        </p>
        <a
          href="https://calendly.com/mindlaunch" // Update with your scheduling link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 inline-flex items-center gap-2"
        >
          Schedule a Meeting
        </a>
      </div>
    </section>
  );
}
