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
      "Shawn drives operational excellence and strategic partnerships, fostering a culture of shared success. Together, we combine our strengths to support groundbreaking innovation.",
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
      "Keaton leads with a visionary outlook, inspiring our collaborative efforts and ensuring every innovation brings us closer together in our mission to transform technology.",
    social: {
      linkedin: "https://linkedin.com/in/keaton-m",
      twitter: "https://twitter.com/K3Y_10",
    },
  },
  {
    name: "Intelligent Agent",
    image: agentPic,
    role: "Non-Fungible Agent",
    description:
      "An intelligent non-fungible agent that assists with business operations, analytics, and assessments while supporting the entire MindLaunch ecosystem.",
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
          At MindLaunch.ai, we believe in transforming visionary ideas into impactful realities.
          Our community of strategic partners, innovative founders, and our intelligent agent drive disruptive innovation in AI, blockchain, and quantum technologies.
        </p>
      </div>

      {/* Our Mission & Vision */}
      <div className="max-w-5xl mx-auto bg-black/90 rounded-lg p-6 shadow-md">
        <h2 className="text-3xl font-bold text-orange-300 text-center mb-4 flex items-center justify-center gap-2">
          <FaGlobe className="text-orange-300 text-4xl md:text-5xl transition-transform duration-200 hover:scale-110" /> Our Mission & Vision
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Our mission is to empower groundbreaking startups and visionary founders by providing the tools, mentorship, and capital needed to turn ideas into market-leading innovations.
          We envision a future where creative genius meets practical execution to drive lasting impact.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Leveraging our robust ecosystem and advanced analytics, we connect entrepreneurs with strategic partners and investors, accelerating growth and innovation.
        </p>
      </div>

      {/* Meet the Team */}
      <div className="max-w-4xl mx-auto bg-black rounded-lg p-6 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-orange-300">
          Meet the Team
        </h2>
        <p className="mt-4 text-lg">
          Success is built together. Our team of strategic partners, technical experts, and our intelligent agent form the backbone of our innovative ecosystem.
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

      {/* Call to Action Section with FormEmbed */}
      <div className="max-w-5xl mx-auto mt-16 mb-16 text-center">
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
