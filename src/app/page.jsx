// import CategoryList from "@/components/CategoryList";
// import { Separator } from "@/components/ui/separator";
// import prisma from "@/utils/connection";

const Home = () => {
  // const dynamic = (await import("next/dynamic")).default;
  // const Fashsales = dynamic(() => import("@/components/Fashsales"));
  // const Carousels = dynamic(() => import("@/components/Carousels"));
  // const Featured = dynamic(() => import("@/components/Featured"));
  // const Enhancement = dynamic(() => import("@/components/Enhancement"));
  // const query = {
  //   take: 6,
  //   skip: 0,
  // };
  // const categories = await prisma?.category.findMany(query);
  // const popularProducts = await prisma?.product.findMany({
  //   ...query,
  //   orderBy: { views: "desc" },
  // });
  // const products = await prisma?.product.findMany(query);

  return (
    <div className="">
      {/* <Carousels /> */}
      <div className="px-[10%]">
        {/* {products ? (
          <Fashsales
            title="Today's"
            heading="Flash sales"
            products={products}
          />
        ) : (
          <div></div>
        )} */}
        {/* <Separator className="my-4" /> */}
        {/* <CategoryList categories={categories} /> */}
        {/* <Enhancement /> */}
        {/* <Separator className="my-4" /> */}

        {/* <Fashsales
          title="Our Products"
          heading="Explore Our Products"
          products={popularProducts}
        /> */}

        {/* <Featured /> */}
      </div>
    </div>
  );
};
export default Home;
