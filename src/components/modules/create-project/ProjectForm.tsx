"use client";

import { useCreateProject } from "@/hooks/createProject.hook";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

// Dynamically import ReactQuill to handle SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type ProjectFormValues = {
  title: string;
  liveLink: string;
  content: string;
  tech: string[];
};

const ProjectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ProjectFormValues>({
    defaultValues: {
      title: "",
      liveLink: "",
      content: "",
      tech: [],
    },
  });

  const {
    mutate: createProjectMutation,
    error,
    isSuccess,
  } = useCreateProject();

  const onSubmit: SubmitHandler<ProjectFormValues> = (data) => {
    const formData = {
      ...data,
    };

    console.log("Submitted project Data:--->", formData);
    createProjectMutation(formData);
  };

  useEffect(() => {
    if (error) {
      toast.error("Error submitting project.");
    }

    if (isSuccess) {
      toast.success("Project created successfully!");
    }
  }, [error, isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          {...register("title", { required: "Title is required" })}
          type="text"
          className="border p-2 rounded w-full text-slate-300 !bg-inherit"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="liveLink">Project Image URL:</label>
        <input
          id="liveLink"
          {...register("liveLink", { required: "Project URL is required" })}
          type="text"
          className="border p-2 rounded w-full text-slate-300 !bg-inherit"
        />
        {errors.liveLink && (
          <p className="text-red-500">{errors.liveLink.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="content">Content:</label>
        <Controller
          name="content"
          control={control}
          defaultValue=""
          rules={{ required: "Content is required" }}
          render={({ field }) => (
            <ReactQuill
              {...field}
              onChange={(value) => field.onChange(value)}
              className="border rounded w-full"
            />
          )}
        />
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="tech">Technologies (comma-separated):</label>
        <input
          id="tech"
          {...register("tech", {
            required: "Technologies are required",
            setValueAs: (value) =>
              String(value || "")
                .split(",")
                .map((tech: string) => tech.trim()),
          })}
          type="text"
          placeholder="e.g., React, Next.js, MongoDB, Express"
          className="border p-2 rounded w-full text-slate-300 !bg-inherit"
        />
        {errors.tech && <p className="text-red-500">{errors.tech.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-brandOrange text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;
