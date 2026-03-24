import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest } from "../api/auth.api";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      console.log("LOGIN START", { email });

      const data = await loginRequest(email, password);

      console.log("LOGIN RESPONSE", data);

      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

      return { success: true, user: data.user };
    } catch (error: any) {
      console.log("LOGIN ERROR FULL", error);
      console.log("LOGIN ERROR RESPONSE", error?.response?.data);
      console.log("LOGIN ERROR MESSAGE", error?.message);

      const message =
        error?.response?.data?.message || error?.message || "Errore durante il login";

      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};