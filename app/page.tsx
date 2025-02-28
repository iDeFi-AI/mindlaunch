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
              Join us on a journey where every idea fuels growth, and together we chart the future of venture capital.
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
              At MindLaunch.ai, our journey is defined by relentless exploration and boundless ambition.
              We are not just investors—we are catalysts bridging disruptive ideas and transformative reality.
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
              We invest in startups that dare to dream big—nurturing early-stage innovators, empowering token-based ventures, and scaling promising enterprises.
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
              At MindLaunch.ai, groundbreaking innovation isn’t measured solely by formal credentials.
              We champion the bold, the curious, and the relentless dreamers—those who learn beyond the traditional classroom.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our journey is defined by individuals who chart their own paths through self-teaching, real-world experience, and unwavering determination.
              We celebrate every form of learning and invest in the visionaries who create the future.
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
              Our launchpad uniquely matches founders with a curated list of VCs and VPs, ensuring that each party selects the best-fit collaborators.
              The integrated iNFAgent acts as your virtual advisor, facilitating seamless collaboration between startups, founders, and investors.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This intelligent assistant empowers non‑technical founders to accelerate growth, while enabling investors to gain deeper insights and make more informed decisions.
            </p>
          </div>
        </div>

        {/* Key Milestones Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
              <FaRegCalendarAlt className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Key Milestones
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li><strong>Idea Validation:</strong> Rigorous market analysis and early traction metrics.</li>
              <li><strong>MVP Development:</strong> Agile prototyping and technical execution.</li>
              <li><strong>Strategic Partnerships:</strong> Curated matching with VCs, VPs, and industry experts.</li>
              <li><strong>Launch & Scale:</strong> Securing investments and accelerating market entry.</li>
            </ul>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
              <FaComments className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Testimonials
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-2">
              "MindLaunch.AI transformed our approach to innovation. The integrated iNFAgent is a game-changer."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              "The launchpad's ecosystem and curated partnerships enabled us to scale faster than ever."
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
              <div>
                <strong>Q: Who can join the launchpad?</strong>
                <p>A: Founders, strategic partners, and investors are welcome.</p>
              </div>
              <div>
                <strong>Q: What is the role of the iNFAgent?</strong>
                <p>
                  A: The iNFAgent acts as a virtual advisor to help startups and investors collaborate and accelerate growth.
                </p>
              </div>
              <div>
                <strong>Q: How do the investment pools work?</strong>
                <p>
                  A: We offer a <strong>Closed Partner Program</strong> for high-impact investments of <strong>$100,000 and above</strong> and an <strong>Open Community Pool</strong> for contributions between <strong>$1,000</strong> and just under <strong>$100,000</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION - FORM EMBED (Founders Application) */}
        <div id="founderForm" className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8">
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
        <div id="partnerForm" className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8">
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
      </div>
    </section>
  );
}
