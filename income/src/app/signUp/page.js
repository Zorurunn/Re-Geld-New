"use client";

import { useSearchParams } from "next/navigation";
import Balance from "@/components/Balance";
import Currency from "@/components/Currency";
import Finish from "@/components/Finish";
import StepContainer from "@/components/StepContainer";
import StepHeader from "@/components/StepHeader";
import { createContext, useContext, useState } from "react";
import CreateAccount from "@/components/CreateAccount";

const StepContext = createContext();
export default function SignUp() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const step = searchParams.get("step");

  return (
    <StepContext.Provider
      value={{
        step,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {step == 1 && <CreateAccount />}

      <StepContainer>
        {step == 2 && <Currency />}
        {step == 3 && <Balance />}
        {step == 4 && <Finish />}
      </StepContainer>
    </StepContext.Provider>
  );
}

export const useStep = () => useContext(StepContext);
