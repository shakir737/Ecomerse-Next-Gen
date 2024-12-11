"use server";
import bcrypt from "bcryptjs";
import prisma from "./connection";
import sendEmail from "@/services/sendEmail";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "next-auth/react";

function generateToken(length) {
  let result = "";
  const charactorLength = process.env.NEXT_PUBLIC_CHARACTERS.length;

  for (let i = 0; i < length; i++) {
    result += process.env.NEXT_PUBLIC_CHARACTERS.charAt(
      Math.floor(Math.random() * charactorLength)
    );
  }

  return result;
}
let token = generateToken(32);

let hashedPassword;
export const register = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (password.length > 8) {
    return { error: "password must be min 8 char long" };
  }

  hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma?.user?.findUnique({
    where: { email },
  });

  if (user && user.emailVerified) {
    return { error: "user already exist!" };
  }

  const newUser = await prisma?.user.upsert({
    where: { email },
    create: { name, email, password: hashedPassword, token },
    update: { token },
  });

  if (newUser) {
    await sendEmail(
      newUser.email,
      "Email Verification",
      `<p>Welcome to Code Scrapper, This is your email verificaiton token. Click here to verify your email! http://localhost:3000/verify/${token}</p>`
    );
    return { message: "Verify Your Email" };
  } else {
    return { error: "Something went wrong" };
  }
};

// verification email
export const emailVerify = async (getToken) => {
  if (getToken) {
    const getUser = await prisma?.user?.findUnique({
      where: {
        token: getToken,
      },
    });
    console.log(getUser);
    if (getUser) {
      const user = await prisma?.user?.update({
        where: { id: getUser.id },
        data: { emailVerified: true },
      });
      if (user) {
        redirect("/login");
      }
    } else {
      return {
        error: "Token expired",
      };
    }
  }
};

// login
export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  // const email = formData.get("email");
  // const password = formData.get("password");

  // const user = await prisma.user.findUnique({
  //   where: { email },
  // });

  // if (!user) {
  //   return { error: "Sorry this user not exists" };
  // }

  // const isMatch = await bcrypt.compare(password, user?.password);

  // if (!isMatch) {
  //   return { error: "Password not matched" };
  // }
  console.log(email);
  console.log(password);
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
  }
};

// delete function
export const deleteFunction = async ({ id, table }) => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return { error: "user not found" };
  }

  let item;
  try {
    item = await prisma[table].delete({
      where: { id },
    });
    if (!item) {
      return { error: `${table} not deleted` };
    }
  } catch (error) {
    if (!item) {
      return { error: `${table} not deleted` };
    }
  }

  revalidatePath(
    `/dashboard/${table == "category" ? "categories" : `${table}s`}`
  );
  return { result: item };
};

// logout
export const logout = async () => {
  await signOut();
  redirect('/');
};
