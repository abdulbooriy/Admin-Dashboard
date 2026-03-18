import { LoginFormData } from "../validators/auth.validator";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export type FormErrors = Partial<Record<keyof LoginFormData, string>>;
