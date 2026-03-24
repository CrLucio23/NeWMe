import React from "react";
import { AuthProvider } from "../features/auth/hooks/useAuth";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
