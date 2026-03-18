import api from "@/api";
import { IProducts, IUpdateProducts } from "@/shared/types/products.types";

export const getAllProducts = () =>
  api.get("/products").then((res) => res.data);
export const getOneProduct = (id: string) => api.get(`/products/${id}`);
export const createProducts = (body: IProducts) => api.post("/products", body);
export const updateProducts = ({
  id,
  body,
}: {
  id: string;
  body: IUpdateProducts;
}) => api.put(`/products/${id}`, body);
export const deleteProducts = (id: string) => api.delete(`/products/${id}`);
