import api from "@/api";

import { IBrands, IUpdateBrands } from "@/shared/types/brands.type";

export const getAllBrands = () => api.get("/brands").then((res) => res.data);
export const getOneBrand = (id: string) => api.get(`/brands/${id}`);
export const createBrands = (body: IBrands) => api.post("/brands", body);
export const updateBrands = ({
  id,
  body,
}: {
  id: string;
  body: IUpdateBrands;
}) => api.put(`/brands/${id}`, body);
export const deleteBrands = (id: string) => api.delete(`/brands/${id}`);
