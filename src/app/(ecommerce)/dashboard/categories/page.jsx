import AdminCategories from "@/components/AdminCategories";
import React from "react";
import prisma from "@/utils/connection";
const Categories = async () => {
  const query = {
    take: 10,
    skip: 0,
  };

  const CatList = await prisma.category.findMany(query);

  return (
    <div className="w-full flex flex-col min-h-screen mx-2 md:mx-12">
      {CatList && <AdminCategories CatList={CatList} />}
    </div>
  );
};

export default Categories;
