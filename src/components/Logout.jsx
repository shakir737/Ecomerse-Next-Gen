"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();
  async function handleLogout() {
    await signOut();
    router.push("/");
  }
  return (
    <div>
      <button
        onclick={handleLogout}
        className="cursor-pointer border-none outline-none flex items-center gap-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
