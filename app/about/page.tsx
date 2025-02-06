'use client'

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaHandshake } from "react-icons/fa";
import type { StaticImageData } from "next/image";

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

export default function PartnersAndTeamPage() {
  return (
    <section className="px-6 py-12 text-white">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto bg-black rounded-lg p-6 mt-24 text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-orange-300">
          Meet the Team
        </h1>
        <p className="mt-4 text-lg">
          At MindLaunch.ai, success is built together. Our community of strategic partners, an intelligent agent, and our dedicated team drive disruptive innovation in AI, blockchain, and quantum technologies.
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

      {/* Call to Action Section */}
      <div className="max-w-5xl mx-auto mt-16 mb-16 text-center">
        <div className="bg-black p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-300 flex items-center justify-center gap-2">
            <FaHandshake className="text-white" /> Collaborate with Us
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Ready to bootstrap groundbreaking solutions in AI, Blockchain, and Quantum Technologies? Let’s connect.
          </p>
          <Link
            href="https://calendly.com/mindlaunch"
            className="inline-block bg-gray-700 hover:bg-gray-500 text-orange-300 font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Schedule a Meeting
          </Link>
        </div>
      </div>
    </section>
  );
}
