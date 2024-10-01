import CategoryList from "@/components/CategoryList";
import { Separator } from "@/components/ui/separator";
import prisma from "@/utils/connection";

export default async function Home() {
  const dynamic = (await import("next/dynamic")).default;
  const Fashsales = dynamic(() => import("@/components/Fashsales"));
  const Carousels = dynamic(() => import("@/components/Carousels"));
  const Featured = dynamic(() => import("@/components/Featured"));
  const Enhancement = dynamic(() => import("@/components/Enhancement"));

  return (
    <div className="">
      <Carousels />
      <div className="px-[10%]">
        <Separator className="my-4" />

        <Enhancement />
        <Separator className="my-4" />

        <Featured />
      </div>
    </div>
  );
}
