"use client";

import { useUserRegistration } from "@/hooks/auth.hook";
import registerValidationSchema from "@/schemas/register.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push(redirect ? redirect : "/login");
    }
  }, [isPending, isSuccess, redirect, router]);

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 font-bold text-white text-2xl">
        Register with AARONN
      </h3>
      <div className="w-[35%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              id="name"
              {...register("name")}
              type="text"
              className={`mt-1 block w-full rounded-md border-gray-300 bg-white p-2 text-gray-800 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message as string}
              </p>
            )}
          </div>

          <div className="py-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              className={`mt-1 block w-full rounded-md border-gray-300 bg-white p-2 text-gray-800 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div className="py-3">
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-white"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              {...register("mobileNumber")}
              type="text"
              className={`mt-1 block w-full rounded-md border-gray-300 bg-white p-2 text-gray-800 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                errors.mobileNumber ? "border-red-500" : ""
              }`}
              placeholder="Enter your mobile number"
            />
            {errors.mobileNumber && (
              <p className="mt-1 text-sm text-red-500">
                {errors.mobileNumber.message as string}
              </p>
            )}
          </div>

          <div className="py-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              className={`mt-1 block w-full rounded-md border-gray-300 bg-white p-2 text-gray-800 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <Button
            className="my-3 w-full rounded-md bg-brandOrange text-white font-inter"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </form>

        <div className="text-center text-white">
          Already have an account?{" "}
          <Link href={"/login"} className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
