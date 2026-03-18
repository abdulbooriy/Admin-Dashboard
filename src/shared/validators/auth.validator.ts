import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Elektron pochta - majburiy maydon"),
  password: z
    .string()
    .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
