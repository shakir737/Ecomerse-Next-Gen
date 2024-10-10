"use client";
import FormInput from "@/components/FormInput";
import FormSubmit from "@/components/FormSubmit";
import { toast } from "@/components/ui/use-toast";
import { UploadButton } from "@/lib/uploadthing";
import { register } from "@/utils/actions";
import React, { useState } from "react";

const Signup = () => {
  // const [image, setImage] = useState("");
  const onSubmit = async (formData) => {
    console.log(formData);

    const res = await register(formData);
    if (res?.error) {
      toast({ title: res.error });
    } else toast({ title: res.message });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center py-6 sm:px-6 top-4">
      <div className="rounded sm:mx-auto sm:w-full sm:max-w-md border-shadow border p-10">
        <div className="">
          <div className="flex justify-center items-center text-2xl font-medium">
            <h1>Create an account</h1>
          </div>

          <form action={onSubmit}>
            <FormInput
              id="name"
              label="Full Name"
              placeholder="Enter your name"
              type="text"
              className="h-10"
            />
            <FormInput
              id="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="h-10"
            />
            <FormInput
              id="password"
              label="Password"
              placeholder="Enter the password"
              type="password"
              className="h-10 mb-10"
            />
            {/* <UploadButton
              endpoint="imageUploader"
              appearance={{
                button:
                  "ut-uploading:cursor-not-allowed bg-slate-600 w-full text-xl after:bg-orange-400 max-w-[700px]",
                allowedContent: "hidden",
              }}
              onClientUploadComplete={(res) => {
                setImage(res[0].url);
              }}
              onUploadError={(error) => {
                alert(`ERROR ${error.message}`);
              }}
            /> */}
            <FormSubmit className="w-full bg-red-500 text-white h-12 hover:bg-red-400 mt-10">
              Create
            </FormSubmit>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
