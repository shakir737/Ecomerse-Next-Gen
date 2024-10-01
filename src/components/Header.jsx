import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { components } from "@/utils/data";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GanttChart, Heart, LayoutDashboard, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { logout } from "@/utils/actions";
import Image from "next/image";
import { Button } from "./ui/button";
import { getSession } from "next-auth/react";
import Sesion from "./session";

export default async function Header() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center h-20 px-[10%] ">
        <div>
          <Link href="/login">
            <Image
              src="/logo.png"
              className="h-12 cursor-pointer"
              width={80}
              height={35}
            />
          </Link>
        </div>
        <div className="hidden md:block flex w-full max-w-sm items-center space-x-2 relative border rounded-full">
          <Input type="text" placeholder="Search" />

          <div className="absolute right-0 top-0 rounded ">
            <Button type="submit">Search</Button>
          </div>
        </div>
        <div className="text-md flex items-center gap-5">
          <Link href="/" className="hidden sm:block">
            Home
          </Link>
          <Link href="/" className="hidden sm:block">
            About
          </Link>
          <Link href="/" className="hidden sm:block">
            contact
          </Link>
          <div className="hidden sm:block"></div>
        </div>

        <Sesion />
      </div>
    </div>
  );
}
