"use client";
import FormInput from "@/components/FormInput";
import FormSubmit from "@/components/FormSubmit";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { UploadButton } from "@/lib/uploadthing";
import { login } from "@/utils/actions";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/");
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const { email, password } = formData;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        email: email,
        password: password,
      });

      if (res?.error === null && res?.status === 200) {
        toast({ title: "You Are Successfully Logged In" });
        router.push("/");
      } else {
        toast({ title: "Logged In Failled" });
      }
    } catch (error) {
      toast({ title: "Logged In Failled" });
    }
  };
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center py-6 sm:px-6 top-4">
        <div className="rounded sm:mx-auto sm:w-full sm:max-w-md border-shadow border p-10">
          <div className="flex text-2xl font-medium items-center justify-center">
            <h1>Login Page</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
              {errors.email && (
                <small className="text-red-600 text-sm ">
                  This field is required
                </small>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
              {errors.password && (
                <small className="text-red-600 text-sm ">
                  This field is required
                </small>
              )}
            </div>

            <button className="w-full bg-red-500 text-white h-12 hover:bg-red-400 mt-10">
              Login
            </button>
            <Link
              href="/signup"
              className="cursor-pointer flex items-center justify-center text-blue-400"
            >
              signup
            </Link>
          </form>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div>
              <form
                action={async () => {
                  const result = await signIn("google");
                }}
              >
                <Button
                  className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Google
                  </span>
                </Button>
              </form>
            </div>
            <div>
              <form action={signIn}>
                <Button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    GitHub
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
