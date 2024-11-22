"use client";

import { useDeleteProject } from "@/hooks/deleteProject.hook";
import { useGetAllProject } from "@/hooks/getAllProject.hook";
import { TProjectData } from "@/types";
import Link from "next/link";
import { useEffect } from "react";

const ProjectPage = () => {
  // Fetch all projects
  const {
    mutate: getAllProject,
    error: fetchError,
    isSuccess: isFetchSuccess,
    data,
  } = useGetAllProject();

  // Delete project
  const { mutate: deleteProject } = useDeleteProject();

  // Fetch projects on component mount
  useEffect(() => {
    getAllProject();
  }, [getAllProject]);

  const handleDeleteClick = (projectId: string | undefined) => {
    if (!projectId) {
      console.error("Project ID is undefined.");
      return;
    }

    // Optimistically update the UI
    const updatedProjects = data?.data.filter(
      (project: TProjectData) => project._id !== projectId
    );
    data.data = updatedProjects; // Update the local cache directly

    // Perform the delete operation
    deleteProject(projectId, {
      onError: (error) => {
        console.error("Failed to delete project:", error);
        getAllProject();
      },
    });
  };

  return (
    <div className="max-w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-300 overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        All Projects
      </h2>
      <Link
        href="/profile/create-project"
        className="bg-blue-800 px-4 py-2 text-white rounded hover:bg-blue-700 transition"
      >
        Create Project
      </Link>

      {isFetchSuccess && data?.data?.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Live Link
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Technologies
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((project: TProjectData) => (
              <tr key={project._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-700">
                  {project.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {project.liveLink}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {project.tech && project.tech.length > 0
                    ? project.tech.join(", ")
                    : "No technologies listed"}
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteClick(project._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 mt-4">
          {fetchError ? "Error fetching projects." : "No projects available."}
        </p>
      )}
    </div>
  );
};

export default ProjectPage;
