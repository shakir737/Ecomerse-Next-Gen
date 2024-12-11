import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { getSession } from "@/utils/actions";
import prisma from "@/utils/connection";
import React from "react";
import { useSession } from "next-auth/react";

const EcommerceLayout = async ({ children }) => {
  return (
    <div>
      <Toaster />
      {/* <Header categories={categories} /> */}
      {children}
    </div>
  );
};

export default EcommerceLayout;
