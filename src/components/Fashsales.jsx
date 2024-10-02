import React from "react";
import Title from "./Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EyeItem from "./EyeItem";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export default async function Fashsales({ title, heading, products }) {
  const dynamic = (await import("next/dynamic")).default;
  const Link = (await import("next/link")).default;
  const AddToCart = dynamic(() => import("./AddToCart"));
  const Favorite = dynamic(() => import("./Favorite"));
  return (
    <div className="py-16 mt-10 bg-white border card">
      <Title title={title} heading={heading} />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {products !== "undefined" &&
            products?.map((item, index) => (
              <CarouselItem
                key={index}
                className="card border md:basis-1/2 lg:basis-1/4"
              >
                <div className="">
                  <div
                    className="bg-secondaryColor rounded-md h-64 bg-no-repeat bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${
                        item?.product?.images?.[0] || item?.images?.[0]
                      })`,
                    }}
                  >
                    <div className="absolute right-4 top-5 flex flex-col gap-2">
                      <Favorite id={item?.product?.id || item?.id} />
                      <EyeItem id={item?.product?.id || item?.id} />
                      <AddToCart product={item.product || item}>
                        <div className="flex justify-center items-center bg-white p-1.5 rounded-full cursor-pointer">
                          <ShoppingCart />
                        </div>
                      </AddToCart>
                    </div>
                  </div>
                  <h2 className="text-sm py-2">
                    {item?.name || item?.product?.name}
                  </h2>
                  <div>
                    <span className="text-sm text-red-500 mr-2">
                      ${item?.price || item?.product?.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${(item?.price || item?.product?.price) + 100}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star
                      size={15}
                      className="text-yellow-400"
                      fill="rgb(250 204 21)"
                    />
                    <p className="ms-2 text-sm font-bold text-gray-900">4.95</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                    <div className="text-sm font-medium text-gray-900 underline hover:no-underline">
                      72 Reviews
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[75%] lg:left-[92%] top-[-25px] bg-slate-300" />
        <CarouselNext className="absolute right-0 top-[-25px] bg-slate-300" />
      </Carousel>
      <Link href="/products" className="flex justify-center mt-10">
        <Button className="bg-red-600 text-white">View all products</Button>
      </Link>
    </div>
  );
}
