'use client'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Importing icons for visual emphasis
import {
  FaHandshake,
  FaChartLine,
  FaLayerGroup,
  FaWallet,
  FaLightbulb,
  FaRocket,
  FaBullseye,
} from 'react-icons/fa';
import { GiToken } from 'react-icons/gi';

export default function LaunchPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // State for pitch submission form.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pitch: '',
    file: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Handle text and textarea changes.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input changes.
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  // Submit the form data (with file attachment) via FormData.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('pitch', formData.pitch);
    if (formData.file) {
      data.append('file', formData.file);
    }

    try {
      const res = await fetch('/api/submit-pitch', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setMessage('Your pitch has been received! We will review it and contact you soon.');
        setFormData({ name: '', email: '', pitch: '', file: null });
      } else {
        setMessage('An error occurred while submitting your pitch. Please try again later.');
      }
    } catch (error) {
      setMessage('An error occurred while submitting your pitch. Please try again later.');
    }
    setSubmitting(false);
  };

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
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl p-6 bg-black rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold tracking-tight mt-6 mb-4 text-orange-300">
              Ready to Launch Your Idea?
            </h1>
            <p className="text-lg text-neutral-300 mb-6">
              At MindLaunch.ai, our team will help you through the various stages of building your venture. From idea validation and prototype development to securing pre‑seed investments and refining your pitch, we provide strategic guidance and resources to turn your vision into an investor‑ready enterprise.
            </p>
            {/* Link to scroll down to the pitch submission form */}
            <div className="flex justify-center space-x-4">
              <a
                href="#pitchSubmission"
                className="bg-gray-800 hover:bg-gray-700 text-orange-300 font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Submit Your Pitch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =======================
          LAUNCH PHILOSOPHY
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaLightbulb /> OUR LAUNCH PHILOSOPHY
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          We believe that every innovative idea holds the potential to disrupt industries and capture investor interest. Our mission is to guide you through the early-stage fundraising journey—refining your value proposition, optimizing your cap table, and preparing you for rigorous due diligence. With a focus on pre‑seed validation and strategic financial planning, we set the stage for you to secure the venture capital and private equity backing needed to scale.
        </p>
      </div>

      {/* =======================
          FUNDRAISING & DEVELOPMENT STAGES
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaBullseye /> FUNDRAISING & DEVELOPMENT STAGES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-300 text-lg">
          <div className="p-4 bg-black rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaChartLine className="text-orange-400" /> Concept & Due Diligence
            </h3>
            <p>
              Validate your vision with comprehensive market analysis, competitive positioning, and early traction metrics. Establish the foundation for a thorough due diligence process.
            </p>
          </div>
          <div className="p-4 bg-black rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <GiToken className="text-orange-400" /> MVP & Capital Structuring
            </h3>
            <p>
              Build your Minimum Viable Product (MVP) while fine-tuning your pre‑money valuation and capital structure. Prepare a pitch deck that resonates with angel investors and venture capitalists.
            </p>
          </div>
          <div className="p-4 bg-black rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaRocket className="text-orange-400" /> Market Entry & Term Sheets
            </h3>
            <p>
              Launch your product and engage in strategic negotiations to secure term sheets, convertible notes, and capital commitments from leading investors.
            </p>
          </div>
        </div>
      </div>

      {/* =======================
          FULL SPECTRUM LAUNCH SOLUTIONS
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaHandshake /> FULL SPECTRUM LAUNCH SOLUTIONS
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-neutral-200 space-y-3">
          <li>
            <strong>Strategic Mentorship & Advisory:</strong> Collaborate with industry veterans to refine your pitch, negotiate term sheets, and optimize your cap table.
          </li>
          <li>
            <strong>MVP & Prototype Engineering:</strong> Leverage agile methodologies and cutting-edge technical resources to build a market-ready MVP.
          </li>
          <li>
            <strong>Investor Networking & Capital Access:</strong> Connect with a curated network of angel investors, venture capital firms, and private equity partners.
          </li>
          <li>
            <strong>Financial Modeling & Valuation:</strong> Develop detailed financial projections, perform pre‑money valuations, and prepare for competitive fundraising rounds.
          </li>
          <li>
            <strong>Operational Scaling & Ecosystem Integration:</strong> Seamlessly integrate into the MindLaunch ecosystem, ensuring sustainable growth and long‑term success.
          </li>
        </ul>
      </div>

      {/* =======================
          CONTACT / COLLABORATE
         ======================= */}
      <div className="w-full max-w-5xl mb-16 bg-black/90 p-6 rounded-lg text-center shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-300 flex items-center justify-center gap-2 text-center">
          <FaHandshake /> Collaborate with Us
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 mb-6">
          Ready to transform your idea into an investor‑ready venture? Partner with us to access strategic mentorship, technical expertise, and a dynamic network of venture capital and private equity professionals dedicated to accelerating your growth.
        </p>
        <a
          href="https://calendly.com/mindlaunch" // Update with your scheduling link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-orange-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 inline-flex items-center gap-2"
        >
          Schedule a Meeting
        </a>
      </div>

      {/* =======================
          PITCH SUBMISSION SECTION
         ======================= */}
      <div id="pitchSubmission" className="w-full max-w-4xl mb-16 bg-black rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-orange-300">
          Submit Your Pitch
        </h2>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Share your vision by filling out the form below and attaching your pitch document (PDF, DOC, etc.). We’ll receive your email along with the attached file.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
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
              Pitch Description
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
          <div>
            <label htmlFor="file" className="block text-gray-300 text-lg">
              Attach Your Pitch Document
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="mt-2 w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="bg-gray-800 hover:bg-gray-700 text-orange-300 font-semibold py-3 px-8 rounded-lg transition-transform duration-200 inline-flex items-center gap-2"
            >
              {submitting ? 'Submitting...' : 'Submit Pitch'}
            </button>
          </div>
          {message && (
            <p className="text-center text-gray-300 mt-4 text-lg">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
