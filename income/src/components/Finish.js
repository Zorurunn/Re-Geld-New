"use client";
import { VectorSvg } from "@/components/SVG/VectorSvg";
// import { useData } from "../layout";
import { useData, usePro } from "@/app/layout";
import LogoName from "@/components/LogoName";
import Step from "@/components/Step";
import { MoneySvg } from "@/components/SVG/MoneySvg";
import { ConfirmButton } from "@/components/ConfirmButton";
import { Container } from "@/components/Container";
import { CoinSvg } from "@/components/SVG/CoinSvg";
import { CheckSvg } from "@/components/SVG/CheckSvg";
import { CreateSignUp } from "./CreateSignUp";
import StepHeader from "./StepHeader";

export default function Finish() {
  return (
    <>
      <StepHeader />
      <div className="flex flex-col justify-center items-center gap-[10px] mb-[24px]">
        <CheckSvg />
        <div className="text-[24px]"> Good Job!</div>
      </div>

      <div className="flex flex-col gap-[10px] mb-[32px]">
        <div className="w-full rounded-[5px] bg-gray-200 flex justify-center">
          <input
            className="w-full h-[40px] bg-gray-200 rounded-[5px] pl-[10px]"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="text-[12px]">
          Your very first account has been created. Now continue to dashboard
          and start tracking{" "}
        </div>
      </div>

      <CreateSignUp href={"/dashboard"} />
    </>
  );
}
