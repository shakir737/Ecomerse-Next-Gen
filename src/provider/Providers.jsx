"use client";
import { SessionProvider } from "next-auth/react";
export default function Providers({ children }) {
  return (
    <SessionProvider basePath="http://localhost:3000/api/auth">
      {children}
    </SessionProvider>
  );
}
