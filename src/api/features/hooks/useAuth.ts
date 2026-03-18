import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import * as Auth from "../services/auth";
import { ILoginCredentials, IUser } from "@/shared/types/auth.types";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: async (credentials: ILoginCredentials) => {
      const response = await Auth.login(credentials);
      const users: IUser[] = response.data;
      if (users.length === 0) {
        throw new Error("Email yoki parol noto'g'ri");
      }
      return users[0];
    },
    onSuccess: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    },
  });

  const getMyProfile = useQuery({
    queryKey: ["auth"],
    queryFn: Auth.getMyProfile,
  });

  return { login, getMyProfile };
};
