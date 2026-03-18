import api from "@/api";
import { IEmployee, IUpdateEmployee } from "@/shared/types/employees.types";

export const getAllEmployees = () =>
  api.get("/employees").then((res) => res.data);
export const getOneEmployee = (id: string) => api.get(`/employees/${id}`);
export const createEmployee = (body: IEmployee) => api.post("/employees", body);
export const updateEmployee = ({
  id,
  body,
}: {
  id: string;
  body: IUpdateEmployee;
}) => api.put(`/employees/${id}`, body);
export const deleteEmployee = (id: string) => api.delete(`/employees/${id}`);
