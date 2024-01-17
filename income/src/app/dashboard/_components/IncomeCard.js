import { Dot } from "../../../components/SVG/Dot";

export default function IncomeCard() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between bg-[white] relative rounded-[10px]">
        <div className="flex  items-center gap-[5px] pl-[30px] pr-[30px] pt-[30px]">
          <Dot color={"#84CC16"} />
          <div>Your Income</div>
        </div>
        <hr className="relative w-full" />
        <div className="pl-[30px] pr-[30px] pb-[30px]">
          <div className="flex flex-col">
            <div className="flex gap-[5px]">
              <div>1000</div>
              <div>T</div>
            </div>
            <div>Your Income</div>
          </div>
          <div className="flex gap-[5px]">
            <div>↑</div>
            <div>32% increased desune</div>
          </div>
        </div>
      </div>
    </>
  );
}
