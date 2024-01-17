import { MaruSvg } from "../../../components/SVG/MaruSvg";
import { WifiSvg } from "../../../components/SVG/WifiSvg";

export default function CashCard() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between p-[30px] bg-[#0166FF]  text-[white] rounded-[10px] overflow-hidden relative">
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
