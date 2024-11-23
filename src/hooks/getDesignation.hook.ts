/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDesignation } from "@/services/Designation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetDesignation = () => {
    return useMutation<any, Error, void>({
        mutationKey: ["DESIGNATION_LIST"],
        mutationFn: async () => await getDesignation(), // Ensure postId is a string
        onSuccess: () => {
            toast.success("Designaton Retrive Successfully."); // Update the message for clarity
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
};
