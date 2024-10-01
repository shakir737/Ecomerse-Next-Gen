"use client";
import { SessionProvider } from "next-auth/react";
export default function Providers({ children }) {
  return (
    <SessionProvider basePath="https://main.dkxdmlhjc83qu.amplifyapp.com/api/auth">
      {children}
    </SessionProvider>
  );
}
