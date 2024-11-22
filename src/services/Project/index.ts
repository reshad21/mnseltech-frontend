/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createProject = async (formData: FieldValues): Promise<any> => {

    try {
        const { data } = await axiosInstance.post("/project", formData);
        revalidateTag("PROJECT_LIST");
        return data;

    } catch (error) {
        // Handle error and show error toast if needed
        console.error("Error creating project:", error);
        throw error;
    }
};



export const deleteProject = async (projectId: string) => {
    try {
        // Directly await the delete call
        await axiosInstance.delete(`/project/${projectId}`);
        revalidateTag("PROJECT_LIST");
    } catch (error) {
        console.error("Error deleting projet:", error);
        throw error;
    }
};




export const getAllProject = async () => {
    const fetchOptions = {
        cache: "no-store" as RequestCache,
    };

    const res = await fetch(`${envConfig.baseApi}/project`, fetchOptions);

    // Revalidate cache after fetching new data
    revalidateTag("PROJECT_LIST");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

