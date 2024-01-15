import { useStep } from "@/app/setStep/page";
import LogoName from "./LogoName";
import Step from "./Step";

export default function StepHeader() {
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] mb-[148px]">
      <LogoName />
      <Step />
    </div>
  );
}
