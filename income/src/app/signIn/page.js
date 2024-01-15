"use client";
import Link from "next/link";
import { useState } from "react";
import { useLayout } from "@/app/layout";
import { VectorSvg } from "@/components/SVG/VectorSvg";
import { useAuthZ } from "@/components/providers/AuthProviderZ";
import { Container } from "@/components/Container";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuthZ();
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
              <div className="text-[24px]">Welcome Back</div>
              <div className="text-[16px]  text-gray-500">
                Welcome back, Please enter your details
              </div>
            </div>
            <div className="flex  flex-col gap-[10px] justify-center items-center">
              <input
                className="w-full rounded-[5px] h-[50px] pl-[10px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                placeholder="Email"
              />
              <input
                className="w-full rounded-[5px] h-[50px] pl-[10px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                className="btn btn-active btn-primary w-full text-white bg-sky-700 border-none"
                onClick={() => {
                  signIn(email, password);
                }}
              >
                Log in
              </button>
            </div>
            <div className="flex gap-[10px] justify-center">
              <div>Don’t have account?</div>
              <div className="cursor-pointer text-[blue]">
                <Link href={"/signUp?step=1"}> Sign up</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sky-700"></div>
      </div>
    </Container>
  );
}
