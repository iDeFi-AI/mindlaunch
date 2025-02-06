'use client';

import { FaGithub, FaLinkedin, FaFilePdf, FaCalendar } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative z-50">
      <footer className="bg-black text-white text-center py-10 px-4 border-t border-gray-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Connect with MindLaunch.AI</h2>
          <ul className="flex justify-center items-center flex-wrap gap-6 mt-6">
            <li>
              <a
                className="flex items-center space-x-2 text-white hover:text-blue-300 transition-all"
                href="https://www.linkedin.com/company/mindlauncher" // Update with your LinkedIn URL
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin size={24} />
                <span className="text-lg font-medium">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 text-white hover:text-red-300 transition-all"
                href="https://calendly.com/mindlaunch" // Update with your scheduling link
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaCalendar size={24} />
                <span className="text-lg font-medium">Schedule</span>
              </a>
            </li>
          </ul>
          <p className="mt-8 text-neutral-200">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">MindLaunch.ai</span>. All Rights Reserved. | Licensed under{" "}
            <span className="text-yellow-300">MIT</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
