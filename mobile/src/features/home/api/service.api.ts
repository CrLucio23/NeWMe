import { apiFetch } from "@/src/lib/api";

export const servicesApi = {
  getAll: () =>
    apiFetch("/services", {
      method: "GET",
    }),
};
