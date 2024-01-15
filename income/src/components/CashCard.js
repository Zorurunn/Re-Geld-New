import { MaruSvg } from "./SVG/MaruSvg";
import { WifiSvg } from "./SVG/WifiSvg";

export default function CashCard() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between p-[30px] bg-[#0166FF] relative text-[white]">
        <div>Geld</div>
        <div className="flex flex-col gap-[2px]">
          <div className="opacity-[0.5]">Cash</div>
          <div>10000</div>
        </div>
        <MaruSvg />
        <WifiSvg />
      </div>
    </>
  );
}
