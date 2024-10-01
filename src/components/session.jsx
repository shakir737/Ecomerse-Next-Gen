"use client";
import { GanttChart, Heart, LayoutDashboard, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import { logout } from "@/utils/actions";

const Sesion = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="flex items-center gap-4">
      {status === "authenticated" ? (
        <>
          <Link href="/wishlist">
            <Heart size={20} />
          </Link>
          <Link href="/addtocart">
            <ShoppingCart size={20} />
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={session?.user?.image}
                  alt={session?.user?.name}
                />
                <AvatarFallback>
                  {session?.user?.name?.[0]?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-60">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">
                    {session?.user?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {session?.user?.email}
                  </p>
                  <Separator className="my-4" />
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard size={20} /> <span>Dashboard</span>
                  </Link>
                  <Separator className="my-4" />
                  <form action={logout}>
                    <button className="cursor-pointer border-none outline-none flex items-center gap-2">
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <div className="hidden sm:block">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Sesion;
