'use client'

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaHandshake, FaGlobe, FaBullseye } from "react-icons/fa";
import type { StaticImageData } from "next/image";
import { FilloutEmbed } from "../components/FilloutEmbed"; // adjust the path as needed

// Define a type for profile items
type Profile = {
  name: string;
  image: StaticImageData;
  role: string;
  description: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
};

// Sample profile data (update paths with your actual images)
import keatonPic from "public/keaton.png";
import shawnPic from "public/shawn.png";
import agentPic from "public/agent.png";

// Combined Profiles Array
const profiles: Profile[] = [
  {
    name: "Shawn Sauicer",
    image: shawnPic,
    role: "General Partner",
    description:
      "Shawn drives operational excellence and strategic partnerships, fostering a culture of shared success. His vision is central to transforming innovative ideas into profitable ventures.",
    social: {
      linkedin: "https://www.linkedin.com/in/shawn-saucier/",
      twitter: "https://x.com/shawn_saucier",
    },
  },
  {
    name: "Keaton McCune",
    image: keatonPic,
    role: "Technical Partner",
    description:
      "Keaton leads with a visionary outlook, ensuring our technology and strategic execution set new benchmarks. His expertise bridges the gap between cutting‑edge tech and market success.",
    social: {
      linkedin: "https://linkedin.com/in/keaton-m",
      twitter: "https://twitter.com/K3Y_10",
    },
  },
  {
    name: "Intelligent Agent",
    image: agentPic,
    role: "Non‑Fungible Agent",
    description:
      "Our Intelligent Agent is an AI‑driven virtual advisor that supports business operations, analytics, and technical guidance, empowering both founders and partners – especially those without a technical background.",
  },
];

export default function AboutPage() {
  return (
    <section className="px-6 py-12 text-white space-y-16">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto bg-black rounded-lg p-6 mt-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-orange-300">
          About MindLaunch.ai
        </h1>
        <p className="mt-4 text-lg">
          At MindLaunch.ai, we transform visionary ideas into impactful realities. Our unique ecosystem blends traditional venture discipline with decentralized innovation, uniting strategic partners, innovative founders, and advanced AI through our LaunchPad.
        </p>
      </div>

      {/* Our Mission & Vision */}
      <div className="max-w-5xl mx-auto bg-black/90 rounded-lg p-6 shadow-md">
        <h2 className="text-3xl font-bold text-orange-300 text-center mb-4 flex items-center justify-center gap-2">
          <FaGlobe className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Our Mission & Vision
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Our mission is to empower groundbreaking startups and visionary founders by providing the tools, mentorship, and capital needed to create market-leading innovations. We envision a future where creative genius and practical execution converge, driving sustainable growth and profitability.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          By leveraging our robust ecosystem, we connect entrepreneurs with strategic partners and investors, catalyzing transformative change across AI, blockchain, and quantum technologies.
        </p>
      </div>

      {/* Our Ecosystem & Approach */}
      <div className="max-w-5xl mx-auto bg-black/90 rounded-lg p-6 shadow-md">
        <h2 className="text-3xl font-bold text-orange-300 text-center mb-4">
          Our Ecosystem & Approach
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          MindLaunch.ai’s LaunchPad stands apart through a dual funding model that combines a traditional closed partner program with a decentralized open community pool.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          <strong>Closed Partner Program:</strong> Designed for strategic VC and institutional partners, this program ensures early, high‑impact investments with rigorous due diligence and personalized support.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          <strong>Open Community Pool:</strong> Embracing democratized capital, this pool allows contributions starting at <strong>$100</strong> and aggregates funds until a threshold of <strong>$100K</strong> is reached. With smart contracts automating fund allocation (70% to startups, 20% to ecosystem development, and 10% reserved), we ensure transparency, security, and broad community participation.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          With our cutting‑edge iNFAgent supporting both technical and non‑technical founders, we provide hands‑on guidance and real‑time insights, ensuring every participant has the tools to succeed. Our ecosystem is profit‑driven, sustainable, and built to scale, uniting a global network of innovators and investors.
        </p>
      </div>

      {/* Meet the Team */}
      <div className="max-w-4xl mx-auto bg-black rounded-lg p-6 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-orange-300">
          Meet the Team
        </h2>
        <p className="mt-4 text-lg">
          Our strength lies in our team of strategic partners, technical experts, and our intelligent agent. Together, we drive disruptive innovation and build a thriving ecosystem.
        </p>
      </div>

      {/* Profiles Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="flex flex-col md:flex-row items-center bg-black rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200"
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0 mr-4 mb-4 md:mb-0">
                <Image
                  src={profile.image}
                  alt={`${profile.name} Portrait`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-left space-y-2">
                <h3 className="text-2xl font-semibold text-orange-300">
                  {profile.name}
                </h3>
                <p className="text-sm uppercase text-white">{profile.role}</p>
                <p className="text-white">{profile.description}</p>
                {profile.social && (
                  <div className="flex gap-4 mt-2">
                    {profile.social.linkedin && (
                      <Link
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-600 cursor-pointer"
                      >
                        <FaLinkedin size={20} />
                      </Link>
                    )}
                    {profile.social.twitter && (
                      <Link
                        href={profile.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-600 cursor-pointer"
                      >
                        <FaTwitter size={20} />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section with FormEmbed for Partner Application */}
      <div className="max-w-5xl mx-auto mt-16 mb-16 text-center">
        <div id="partnerForm" className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-orange-300 flex items-center justify-center gap-2">
            <FaHandshake className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Partner Application
          </h2>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Are you a VC or VP interested in strategic investments and joining a sustainable, profit‑driven ecosystem? Complete the form below to join our Closed Partner Program.
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
