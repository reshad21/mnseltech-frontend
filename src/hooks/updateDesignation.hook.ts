/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateDesignation } from "@/services/Designation";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useUpdateDesignation = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["DESIGNATION_LIST"],
        mutationFn: async ({ designationTitle, id }) =>
            await updateDesignation({ designationTitle }, id), // Pass an object for modalData
        onSuccess: () => {
            toast.success("Designation details updated successfully.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
