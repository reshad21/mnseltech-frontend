/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/UI/Container";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import loginValidationSchema from "@/schemas/login.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const { setIsLoading: userLoading } = useUser();
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = (data: any) => {
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push(redirect ? redirect : "/profile");
    }
  }, [isPending, isSuccess, redirect, router]);

  return (
    <Container>
      <div className="flex h-screen w-full flex-col items-center justify-center px-4">
        <h3 className="my-2 text-3xl font-bold">Login to Dashboard</h3>
        <p className="mb-6">Welcome back! Let’s get started.</p>
        <div className="w-full max-w-md p-8 rounded-md shadow-md bg-slate-950">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="py-3">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`mt-2 block w-full rounded-lg border-2 border-brandOrange bg-inherit font-inter px-4 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="py-3">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className={`mt-2 block w-full rounded-lg border-2 border-brandOrange bg-inherit font-inter px-4 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Enter your password"
              />
            </div>

            <Button
              className="my-6 w-full rounded-md border-2 border-brandOrange bg-inherit font-inter font-semibold text-white hover:bg-brandOrange-light transition-colors"
              size="lg"
              type="submit"
              isLoading={isPending}
            >
              LOGIN
            </Button>
          </form>

          <div className="my-4 text-center">
            <Link
              href="/forget-password"
              className="text-brandOrange hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="my-4 flex items-center justify-center">
            <span className="w-full h-px"></span>
            <span className="mx-3 text-sm">OR</span>
            <span className="w-full h-px"></span>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-brandOrange hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
