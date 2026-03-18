import api from "@/api";
import { ILoginCredentials } from "@/shared/types/auth.types";

export const login = (credentials: ILoginCredentials) =>
  api.get(`/users?email=${credentials.email}&password=${credentials.password}`);

export const getMyProfile = async () => {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) return Promise.resolve(null);
  const { id } = JSON.parse(storedUser);
  const res = await api.get(`/users/${id}`);
  return res.data;
};
