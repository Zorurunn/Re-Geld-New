"use client";

import { useSearchParams } from "next/navigation";
import Balance from "@/components/Balance";
import Currency from "@/components/Currency";
import Finish from "@/components/Finish";
import StepContainer from "@/components/StepContainer";
import StepHeader from "@/components/StepHeader";
import { createContext, useContext, useState } from "react";

const StepContext = createContext();
export default function SearchBar() {
  const searchParams = useSearchParams();

  const step = searchParams.get("step");

  return (
    <StepContext.Provider
      value={{
        step,
      }}
    >
      <StepContainer>
        <StepHeader />
        {step == 1 && <Currency />}
        {step == 2 && <Balance />}
        {step == 3 && <Finish />}
      </StepContainer>
    </StepContext.Provider>
  );
}

export const useStep = () => useContext(StepContext);
