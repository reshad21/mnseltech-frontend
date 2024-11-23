/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createDesignation = async (formData: FieldValues): Promise<any> => {

    try {
        const { data } = await axiosInstance.post("/designation", formData);
        revalidateTag("DESIGNATION_LIST");
        return data;

    } catch (error) {
        // Handle error and show error toast if needed
        console.error("Error creating designation:", error);
        throw error;
    }
};



export const deleteDesignation = async (designationId: string) => {
    try {
        // Directly await the delete call
        await axiosInstance.delete(`/designation/${designationId}`);
        revalidateTag("DESIGNATION_LIST");
    } catch (error) {
        console.error("Error deleting projet:", error);
        throw error;
    }
};




export const getDesignation = async () => {
    const fetchOptions = {
        cache: "no-store" as RequestCache,
    };

    const res = await fetch(`${envConfig.baseApi}/designation`, fetchOptions);

    // Revalidate cache after fetching new data
    revalidateTag("DESIGNATION_LIST");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};




export const updateDesignation = async (modalData: any, designationId: string): Promise<any> => {
    const { designationTitle } = modalData;

    try {
        const { data } = await axiosInstance.patch(`/designation/${designationId}`, {
            designationTitle
        });

        revalidateTag("DESIGNATION_LIST");
        return data;

    } catch (error) {
        // Handle error and show error toast if needed
        console.error("Error Designation:", error);
        throw error; // Rethrow the error to handle it later
    }
};

