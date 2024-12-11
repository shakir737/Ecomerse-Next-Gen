import { GanttChart, Heart, LayoutDashboard, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import Logout from "./Logout";

const Sesion = (props) => {
  const { user } = props;

  return (
    <div className="flex items-center gap-4">
      {user ? (
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
                <AvatarImage src={user?.image} alt={user?.name} />
                <AvatarFallback>
                  {user?.name?.[0]?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-60">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">{user?.name}</h4>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                  <Separator className="my-4" />
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard size={20} /> <span>Dashboard</span>
                  </Link>
                  <Separator className="my-4" />

                  <Logout />
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
