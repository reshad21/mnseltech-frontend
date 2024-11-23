/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetDesignation } from "@/hooks/getDesignation.hook";
import { useUpdateDesignation } from "@/hooks/updateDesignation.hook";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  data?: any;
  designationTitle: string;
  id?: string;
};

const DesignationDashboardPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  //   const { mutate: createDesignation } = useCreateDesignaion();
  const { mutate: getDesignation, data } = useGetDesignation();
  const { mutate: updateDesignation } = useUpdateDesignation();

  useEffect(() => {
    getDesignation();
  }, [getDesignation]);

  //   console.log("get designaton data-->", data?.data);

  // Set default values once data is fetched
  useEffect(() => {
    if (data?.data?.designationTitle) {
      reset({
        designationTitle: data.data.designationTitle,
        id: data.data._id,
      });
    }
  }, [data, reset]);

  // form submiting data
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formData = { ...data };
    // Add API call logic here
    updateDesignation(formData);
    console.log("Updated designation Data:--->", formData);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Update Designation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="designation-title"
            className="block text-gray-700 mb-2"
          >
            Designation Title
          </label>
          <input
            id="designation-title"
            {...register("designationTitle", {
              required: "Designation title is required",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter designation title"
          />
          {errors.designationTitle && (
            <p className="text-red-500 text-sm mt-1">
              {errors.designationTitle.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default DesignationDashboardPage;
