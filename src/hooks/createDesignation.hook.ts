/* eslint-disable @typescript-eslint/no-explicit-any */
import { createDesignation } from "@/services/Designation";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useCreateDesignaion = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["DESIGNATION_LIST"],
        mutationFn: async (formData) => await createDesignation(formData),
        onSuccess: () => {
            toast.success("Designation created successfully."); // Updated message for clarity
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
