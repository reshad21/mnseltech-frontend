/* eslint-disable @typescript-eslint/no-explicit-any */
import { createProject } from "@/services/Project";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useCreateProject = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["PROJECT_LIST"],
        mutationFn: async (formData) => await createProject(formData),
        onSuccess: () => {
            toast.success("Project created successfully."); // Updated message for clarity
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
