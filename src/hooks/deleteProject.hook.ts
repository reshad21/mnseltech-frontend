/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteProject } from "@/services/Project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteProject = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationKey: ["PROJECT_LIST"],
        mutationFn: async (projectId: string) => {
            await deleteProject(projectId);
        },
        onSuccess: () => {
            toast.success("Project deleted successfully.");
            queryClient.invalidateQueries({ queryKey: ["PROJECT_LIST"] });
            queryClient.refetchQueries({ queryKey: ["PROJECT_LIST"] });
        },
        onError: (error: Error) => {
            toast.error(error.message || "An error occurred.");
        },
    });
};
