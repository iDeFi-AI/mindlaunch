'use client'

import { useState } from 'react'
import Image from 'next/image'
import SpaceBackground from './components/SpaceBackground' // Updated to use a static background image
import logo from 'public/mindlaunch-logo.png' // Update with your logo image file
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
  // Local state for pitch form submission.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pitch: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage('')

    try {
      const res = await fetch('/api/submit-pitch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setMessage(
          'Your vision has been received! Our AI will review your pitch and chart the course ahead.'
        )
        setFormData({ name: '', email: '', pitch: '' })
      } else {
        setMessage(
          'An error occurred while submitting your pitch. Please try again later.'
        )
      }
    } catch (error) {
      setMessage(
        'An error occurred while submitting your pitch. Please try again later.'
      )
    }
    setSubmitting(false)
  }

  return (
    <section className="relative text-white overflow-hidden">
      {/* Fixed, full-screen background */}
      <SpaceBackground />

      {/* Main content container */}
      <div className="container mx-auto px-6 mt-24 py-12 relative z-10 space-y-16">
        {/* Intro & Logo Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Logo integrated within the intro */}
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <div className="flex justify-center">
              <Image
                src={logo}
                alt="MindLaunch.ai Logo"
                className="object-contain"
                width={200} // Adjust size as needed
                height={50} // Adjust size as needed
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Welcome to MindLaunch.AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              In the vast expanse of digital innovation, we serve as a beacon for visionary founders.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Specializing in AI, Blockchain, and Quantum breakthroughs, we navigate new frontiers in technology.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Join us on a journey where every idea fuels growth, and together we chart the future of venture capital.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-white">
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
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Our Investment Journey
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We invest in startups that dare to dream big—nurturing early-stage innovators, empowering token-based ventures, and scaling promising enterprises.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {/* Artificial Intelligence */}
              <div className="flex flex-col items-center">
                <FaRobot size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Artificial Intelligence</span>
              </div>
              <div className="flex flex-col items-center">
                <SiOpenai size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Machine Learning</span>
              </div>
              {/* Blockchain */}
              <div className="flex flex-col items-center">
                <SiEthereum size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Blockchain</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSolidity size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Smart Contracts</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGraphql size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Decentralized Apps</span>
              </div>
              {/* Quantum Technologies */}
              <div className="flex flex-col items-center">
                <BiNetworkChart size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Quantum Computing</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Quantum Software</span>
              </div>
              {/* Supporting Technologies */}
              <div className="flex flex-col items-center">
                <SiKubernetes size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Scalable Infrastructure</span>
              </div>
              <div className="flex flex-col items-center">
                <FaAws size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">Cloud Platforms</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTerraform size={48} className="text-white" />
                <span className="mt-2 text-lg text-gray-300">DevOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Self-Made Excellence Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center text-white flex items-center justify-center gap-2">
              <FaGraduationCap className="text-white" /> Education & Self-Made Excellence
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

        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white flex items-center justify-center gap-2">
              <FaHandshake className="text-white" /> Join the Expedition
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Are you a visionary founder with a disruptive idea? Embark on a journey with MindLaunch.ai and help reshape the future of technology.
            </p>
            <a
              href="https://calendly.com/mindlaunch" // Update with your booking link if needed.
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        {/* Pitch Submission Section */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-white">
              Share Your Vision for AI Review
            </h2>
            <p className="text-lg text-gray-300 mb-6 text-center">
              Every transformative journey begins with a spark. Submit your pitch below and let our AI system illuminate the potential of your idea.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="pitch" className="block text-gray-300 text-lg">
                  Your Pitch
                </label>
                <textarea
                  id="pitch"
                  name="pitch"
                  rows={5}
                  value={formData.pitch}
                  onChange={handleChange}
                  className="mt-2 w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-200 inline-flex items-center gap-2"
                >
                  {submitting ? 'Submitting...' : 'Submit for AI Review'}
                </button>
              </div>
              {message && (
                <p className="text-center text-gray-300 mt-4 text-lg">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
