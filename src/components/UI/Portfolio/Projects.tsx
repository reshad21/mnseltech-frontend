"use client";
/* eslint-disable react/no-unescaped-entities */
import { useGetAllProject } from "@/hooks/getAllProject.hook";
import { TProjectData } from "@/types";
import { convert } from "html-to-text";
import React, { useEffect } from "react";

const Projects: React.FC = () => {
  // Fetch all projects
  const {
    mutate: getAllProject,
    error: fetchError,
    isSuccess: isFetchSuccess,
    data,
  } = useGetAllProject();

  // Fetch projects on component mount
  useEffect(() => {
    getAllProject();
  }, [getAllProject]);

  if (!isFetchSuccess) {
    return (
      <div className="text-[#e3e2fd] text-center">
        {fetchError ? "Error fetching projects." : "Loading projects..."}
      </div>
    );
  }

  // Function to truncate content to a specified word limit
  const truncateContent = (content: string, wordLimit: number) => {
    const plainText = convert(content, { wordwrap: false });
    const words = plainText.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : plainText;
  };

  return (
    <section className="bg-gradient-to-t from-[#1e1c45] via-[#302d6b] to-[#5e0a99] py-20 px-4 sm:px-8 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-[#9d98f0] text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data && data?.data.length > 0 ? (
            data.data.map((project: TProjectData) => (
              <div
                key={project._id}
                className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-[#ff4c30] mb-4">
                  {project.title}
                </h3>
                <p className="text-[#e3e2fd] mb-4">
                  {truncateContent(project.content, 50)}
                </p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#9d98f0]">
                    Tech Stack:
                  </h4>
                  <ul className="list-disc list-inside text-[#d182e3]">
                    {project.tech?.length > 0 ? (
                      project.tech.map((tech, i) => <li key={i}>{tech}</li>)
                    ) : (
                      <li>No technologies listed</li>
                    )}
                  </ul>
                </div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-br from-[#ff4c30] to-[#f97a61] text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:from-[#f97a61] hover:to-[#ff4c30] transition duration-300"
                >
                  View Project
                </a>
              </div>
            ))
          ) : (
            <p className="text-[#e3e2fd] text-center">
              No projects available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
