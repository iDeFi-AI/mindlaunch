'use client'

import { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import SpaceBackground from './components/SpaceBackground'
import logo from 'public/mindlaunch-logo.png'
import { FaHandshake, FaRobot, FaAws, FaGraduationCap } from 'react-icons/fa'
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

        {/* Investment Journey Section */}
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
                <FaRobot size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Artificial Intelligence</span>
              </div>
              <div className="flex flex-col items-center">
                <SiOpenai size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Machine Learning</span>
              </div>
              <div className="flex flex-col items-center">
                <SiEthereum size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Blockchain</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSolidity size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Smart Contracts</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGraphql size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Decentralized Apps</span>
              </div>
              <div className="flex flex-col items-center">
                <BiNetworkChart size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Quantum Computing</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Quantum Software</span>
              </div>
              <div className="flex flex-col items-center">
                <SiKubernetes size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Scalable Infrastructure</span>
              </div>
              <div className="flex flex-col items-center">
                <FaAws size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">Cloud Platforms</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTerraform size={48} className="text-orange-300" />
                <span className="mt-2 text-lg text-gray-300">DevOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Self-Made Excellence Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
              <FaGraduationCap className="text-orange-300" /> Education & Self-Made Excellence
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              At MindLaunch.ai, groundbreaking innovation isn’t measured solely by formal credentials.
              We champion the bold, the curious, and the relentless dreamers—those who learn beyond the traditional classroom.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our journey is defined by individuals who chart their own paths through self-teaching, real-world experience,
              and unwavering determination. We celebrate every form of learning and invest in the visionaries who create the future.
            </p>
          </div>
        </div>

        {/* Call to Action Section with Fillout Form Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-300 flex items-center justify-center gap-2">
              <FaHandshake className="text-orange-300" /> Join the Expedition
            </h2>
            <p className="text-lg text-gray-300 mb-3">
              Are you a visionary founder with a disruptive idea? 
            </p>
            <p className="text-lg text-gray-300 mb-6">
            Fill out the form below to start your journey with MindLaunch.AI.
            </p>
            {/* Fillout Form Embed */}
            <div
              style={{ width: '100%', height: '500px' }}
              data-fillout-id="p85xSWGPrvus"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            ></div>
            <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
          </div>
        </div>
      </div>
    </section>
  )
}
