'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaHandshake } from "react-icons/fa";
import Script from "next/script";

// Placeholder images and assets (update paths as needed)
import profilePic from "public/mindlaunch-logo.png";

export default function Page() {
  // Placeholder project arrays
  const activeProjects = [
    {
      title: "Active Project 1",
      description:
        "This project is currently active and represents cutting-edge innovation in the field of AI and Blockchain.",
      url: "https://active-project1.mindlaunch.ai",
    },
    {
      title: "Active Project 2",
      description:
        "An active initiative focusing on scalable solutions and advanced quantum computing integrations.",
      url: "https://active-project2.mindlaunch.ai",
    },
  ];

  const exitedProjects = [
    {
      title: "Exited Project A",
      description:
        "This project successfully exited, demonstrating high-impact results and strategic growth.",
      url: "https://exited-projecta.mindlaunch.ai",
    },
    {
      title: "Exited Project B",
      description:
        "A notable project that has been exited, showcasing innovation and solid market performance.",
      url: "https://exited-projectb.mindlaunch.ai",
    },
  ];

  // Toggle state: "active" or "exited"
  const [activeTab, setActiveTab] = useState<"active" | "exited">("active");

  // For lazy-loading iframes on scroll (if needed)
  const [visibleIframes, setVisibleIframes] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIframes((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".project-iframe");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Determine which projects to display based on activeTab
  const projectsToDisplay = activeTab === "active" ? activeProjects : exitedProjects;

  return (
    <section className="flex flex-col items-center justify-center px-6 py-12">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center mt-24 mb-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl p-6 bg-black rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold tracking-tight mt-6 mb-4 text-orange-300">
              Blend of Human and Machine
            </h1>
            <p className="text-lg text-neutral-300 mb-6">
              Explore cutting-edge projects where human ingenuity meets AI precision. Our solutions are built for scalability, performance, and innovation—with a bootstrapping mindset that maximizes impact while minimizing overhead.
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Buttons for Active / Exited Projects */}
      <div className="w-full max-w-4xl flex justify-center mb-8">
        <button
          onClick={() => setActiveTab("active")}
          className={`px-6 py-2 rounded-l-lg border border-r-0 font-semibold transition-colors duration-300 cursor-pointer ${
            activeTab === "active"
              ? "bg-black text-neutral-300 border-orange-600 border-b-4"
              : "bg-black text-neutral-300 border-neutral-700"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveTab("exited")}
          className={`px-6 py-2 rounded-r-lg border font-semibold transition-colors duration-300 cursor-pointer ${
            activeTab === "exited"
              ? "bg-black text-neutral-300 border-orange-600 border-b-4"
              : "bg-black text-neutral-300 border-neutral-700"
          }`}
        >
          Exited
        </button>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-4xl text-center p-6 bg-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-orange-300">
          {activeTab === "active" ? "Active Projects" : "Exited Projects"}
        </h2>
        <p className="text-lg text-neutral-300 mb-6">
          {activeTab === "active"
            ? "Explore our current initiatives driving innovation across AI, Blockchain, and Quantum technologies."
            : "Discover projects that have successfully exited, demonstrating impactful innovation and market success."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsToDisplay.map((project, index) => (
            <div key={index} className="bg-neutral-900 rounded-lg shadow-md overflow-hidden">
              {visibleIframes[project.url] ? (
                <iframe
                  id={project.url}
                  src={project.url}
                  className="project-iframe w-full h-64"
                  title={project.title}
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  id={project.url}
                  className="project-iframe w-full h-64 bg-neutral-800 flex items-center justify-center cursor-pointer"
                >
                  {/* Placeholder for lazy-loaded iframe */}
                </div>
              )}
              <p className="text-lg text-neutral-300 p-4">
                <strong>{project.title}:</strong> {project.description}
              </p>
              <div className="text-center pb-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-500 underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section with Fillout Form Embed */}
      <div className="w-full max-w-5xl mt-16 mb-16 bg-black p-6 rounded-lg text-center shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-300 flex items-center justify-center gap-2">
          <FaHandshake className="text-white" /> Collaborate with Us
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 mb-6">
          Ready to bootstrap groundbreaking solutions in AI, Blockchain, and Quantum Technologies? Let’s connect.
        </p>
        {/* Fillout Form Embed */}
        <div
          style={{ width: "100%", height: "500px" }}
          data-fillout-id="p85xSWGPrvus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        ></div>
        <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
      </div>
    </section>
  );
}
