"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="cursor-pointer border-none outline-none flex items-center gap-2"
      >
        Sign out
      </button>
    </div>
  );
};

export default Logout;
