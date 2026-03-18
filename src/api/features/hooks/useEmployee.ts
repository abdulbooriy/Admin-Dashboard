import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as Employee from "../services/employee";

export const useEmployee = () => {
  const queryClient = useQueryClient();

  const getAllEmployees = useQuery({
    queryKey: ["employees"],
    queryFn: Employee.getAllEmployees,
  });

  const createEmployee = useMutation({
    mutationFn: Employee.createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const updateEmployee = useMutation({
    mutationFn: Employee.updateEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const deleteEmployee = useMutation({
    mutationFn: Employee.deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  return { getAllEmployees, createEmployee, updateEmployee, deleteEmployee };
};
