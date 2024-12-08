/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllProject } from "@/services/Project";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllProject = () => {
    return useMutation<any, Error, void>({
        mutationKey: ["PROJECT_LIST"],
        mutationFn: async () => await getAllProject(), // Ensure postId is a string
        onSuccess: () => {
            console.log("All project fetched successfully."); // Update the message for clarity
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
};
