"use client";
import { Container } from "@/components/Container";
import { VectorSvg } from "@/components/SVG/VectorSvg";
import Link from "next/link";
import { SignUpButton } from "@/components/SignUpButton";
import { CreateSignUp } from "@/components/CreateSignUp";
import { useState } from "react";
import { useAuthZ } from "@/components/providers/AuthProviderZ";
import { useStep } from "@/app/signUp/page";

export default function CreateAccount() {
  const { email, setEmail, password, setPassword } = useStep();
  const { signUp } = useAuthZ();
  return (
    <Container>
      <div className="h-full grid grid-cols-2 w-full">
        <div className="flex justify-center items-center ">
          <div className="flex flex-col w-[80%] gap-[30px]">
            <div className=" flex gap-[5px] justify-center">
              <div className=" flex jystify-center items-center">
                <VectorSvg />
              </div>
              <div className="text-[24px] flex jystify-center items-center">
                Geld
              </div>
            </div>
            <div className="flex  flex-col gap-[10px] justify-center items-center">
              <div className="text-[24px]">Create Geld account</div>
              <div className="text-[16px]  text-gray-500">
                Sign up below to create your Wallet account
              </div>
            </div>
            <div className="flex  flex-col gap-[10px] justify-center items-center">
              <input
                className="w-full rounded-[5px] h-[50px] pl-[10px]"
                placeholder="Name"
              />
              <input
                className="w-full rounded-[5px] h-[50px] pl-[10px]"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full rounded-[5px] h-[50px] pl-[10px]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="w-full rounded-[5px] h-[50px] pl-[10px]"
                placeholder="Re-password"
              />
            </div>
            <div>
              {/* <CreateSignUp href={"/signUp?step=2"} /> */}
              <button
                className="btn btn-active btn-primary w-full text-white bg-sky-700 border-none"
                onClick={() => {
                  signUp(email, password);
                }}
              >
                Log in
              </button>
            </div>
            <div className="flex gap-[10px] justify-center">
              <div>Already have an account?</div>

              <div className="cursor-pointer text-[blue]">
                <Link href={"/"}> Sign in</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sky-700"></div>
      </div>
    </Container>
  );
}
