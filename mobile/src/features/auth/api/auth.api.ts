import { apiFetch } from "@/src/lib/api";

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

export const authApi = {
  register: (payload: RegisterPayload) =>
    apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  login: (payload: LoginPayload) =>
    apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
