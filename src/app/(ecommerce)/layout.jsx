import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { getSession } from "@/utils/actions";
import prisma from "@/utils/connection";
import React from "react";

const EcommerceLayout = async ({ children }) => {
  return (
    <div>
      <Toaster />
      <Header />
      {children}
    </div>
  );
};

export default EcommerceLayout;
