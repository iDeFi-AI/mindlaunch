'use client'

import Image from 'next/image'
import Script from 'next/script'
import SpaceBackground from './components/SpaceBackground'
import logo from 'public/mindlaunch-logo.png'
import {
  FaHandshake,
  FaRobot,
  FaAws,
  FaGraduationCap,
  FaLightbulb,
  FaChartLine,
  FaRocket,
  FaBullseye,
  FaRegCalendarAlt,
  FaComments,
  FaGlobe,
} from 'react-icons/fa'
import {
  SiEthereum,
  SiSolidity,
  SiGraphql,
  SiOpenai,
  SiKubernetes,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si'
import { BiNetworkChart } from 'react-icons/bi'
import { FilloutEmbed } from './components/FilloutEmbed'

export default function MainPage() {
  return (
    <section className="relative text-orange-300 overflow-hidden">
      {/* Fixed, full-screen background */}
      <SpaceBackground />

      {/* Main content container */}
      <div className="container mx-auto px-6 mt-24 py-12 relative z-10 space-y-16">
        {/* Intro & Logo Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-orange-300">
              Welcome to MindLaunch.AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              In the vast expanse of digital innovation, we serve as a beacon for visionary founders.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Specializing in AI, Blockchain, and Quantum breakthroughs, we navigate new frontiers in technology.
            </p>
            <p className="text-lg md:text-xl mt-4 text-gray-300">
              Join us on a journey where every idea fuels growth and together we redefine the future of venture capital.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              At MindLaunch.AI, our journey is defined by relentless exploration and boundless ambition.
              We are not just investors—we are catalysts bridging disruptive ideas and transformative realities.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With decades of collective expertise in technology and venture capital, we empower pioneers who reshape industries.
              Our passion and collaborative spirit fuel every breakthrough.
            </p>
          </div>
        </div>

        {/* Our Investment Journey Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-4 text-orange-300">
              Our Investment Journey
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We invest in startups that dare to dream big—nurturing early-stage innovators, empowering token-based ventures,
              and scaling promising enterprises.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <FaRobot className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Artificial Intelligence</span>
              </div>
              <div className="flex flex-col items-center">
                <SiOpenai className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Machine Learning</span>
              </div>
              <div className="flex flex-col items-center">
                <SiEthereum className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Blockchain</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSolidity className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Smart Contracts</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGraphql className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Decentralized Apps</span>
              </div>
              <div className="flex flex-col items-center">
                <BiNetworkChart className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Quantum Computing</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Quantum Software</span>
              </div>
              <div className="flex flex-col items-center">
                <SiKubernetes className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Scalable Infrastructure</span>
              </div>
              <div className="flex flex-col items-center">
                <FaAws className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">Cloud Platforms</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTerraform className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" />
                <span className="mt-2 text-lg text-gray-300">DevOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Self-Made Excellence Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
              <FaGraduationCap className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Education & Self-Made Excellence
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              At MindLaunch.AI, groundbreaking innovation isn’t measured solely by formal credentials.
              We champion the bold, the curious, and the relentless dreamers—those who learn beyond traditional classrooms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our journey is defined by self-taught pioneers and hands-on experience that transform real-world challenges into breakthrough opportunities.
            </p>
          </div>
        </div>

        {/* Ecosystem & iNFAgent Integration Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
              <FaHandshake className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Ecosystem & iNFAgent
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Our launchpad uniquely matches founders with a curated network of VCs and industry experts.
              The integrated iNFAgent acts as your virtual advisor—bridging the gap for non‑technical founders by providing on‑demand guidance and actionable insights.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This intelligent assistant empowers every startup with real-time support, ensuring that every vision is nurtured to its full potential.
            </p>
          </div>
        </div>

         {/* Dual Funding Model & Expected ROI Section (with Partner Application Form) */}
         <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300">
              Our Dual Funding Model & Expected ROI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We employ a dual funding model that maximizes both inclusivity and strategic impact:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2 mb-4">
              <li>
                <strong>Closed Partner Program:</strong> For institutional investors and strategic VC partners,
                with investments starting at <strong>$100,000</strong> up to <strong>$500,000</strong> (occasionally up to <strong>$2M</strong>).
                This program targets a robust ROI, typically aiming for a <strong>3-5x return</strong> or higher through disciplined due diligence.
              </li>
              <li>
                <strong>Open Community Pool:</strong> A decentralized pool that welcomes contributions as low as <strong>$100</strong>.
                Funds are aggregated until reaching a threshold of <strong>$100K</strong>, at which point a smart contract automatically allocates funds:
                <strong> 70%</strong> for startup investments, <strong> 20%</strong> for ecosystem development, and <strong> 10%</strong> reserved.
                This approach offers the opportunity for scalable returns and broad community participation.
              </li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              By combining these two models, we enable high-impact investments with clear ROI expectations,
              while democratizing venture capital for the broader community.
            </p>
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
        </div>

         {/* Founders Application Section */}
         <div id="founderApplication" className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
            <FaHandshake className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Founders Application
          </h2>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Venturing into uncharted territory can be daunting—especially for non‑technical founders.
            At MindLaunch.AI, we empower you with your very own iNFAgent: an AI-powered advisor, builder, and mentor,
            designed specifically for your idea, startup, or project.
          </p>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Our robust support system, backed by expert Technical Partners, provides you with cost‑effective, bootstrapped resources
            and the right tools to build, test, and scale your venture independently.
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

        {/* Key Milestones Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
              <FaRegCalendarAlt className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Key Milestones
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li><strong>Idea Validation:</strong> Robust market analysis, early traction, and risk management.</li>
              <li><strong>MVP Development:</strong> Rapid prototyping with AI-driven assistance and iNFAgent support.</li>
              <li><strong>Strategic Partnerships:</strong> Curated matching with top VCs, VPs, and industry experts.</li>
              <li><strong>Launch & Scale:</strong> Securing investments, executing smart contract triggers, and accelerating market entry.</li>
            </ul>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
              <FaBullseye className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Testimonials
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-2">
              "MindLaunch.AI transformed our approach to innovation. The integrated iNFAgent and dual‑pool model are truly game-changing."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              "Their transparent funding process and clear ROI targets enabled us to scale faster than we ever imagined."
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}
