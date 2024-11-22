/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createProject = async (formData: FieldValues): Promise<any> => {

    try {
        const { data } = await axiosInstance.post("/project", formData);
        revalidateTag("CREATE_PROJECT");
        return data;

    } catch (error) {
        // Handle error and show error toast if needed
        console.error("Error creating project:", error);
        throw error; // Rethrow the error to handle it later
    }
};
