/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Projects: React.FC = () => {
  const projectData = [
    {
      name: "Bike Rental System",
      description:
        "A web application for renting bikes with real-time booking, user authentication, and payment integration.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      name: "Sports Goods E-Commerce",
      description:
        "An e-commerce platform with filtering, sorting, and cart functionality designed for sports enthusiasts.",
      techStack: ["Next.js", "TypeScript", "Stripe API"],
      link: "#",
    },
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and contact information with modern design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#05021d] to-[#5e0a99] py-20 px-8 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-[#9d98f0] text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-[#ff4c30] mb-4">
                {project.name}
              </h3>
              <p className="text-[#e3e2fd] mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-[#9d98f0]">
                  Tech Stack:
                </h4>
                <ul className="list-disc list-inside text-[#d182e3]">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                className="inline-block bg-gradient-to-br from-[#ff4c30] to-[#f97a61] text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:from-[#f97a61] hover:to-[#ff4c30] transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
