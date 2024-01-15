import { VectorSvg } from "./SVG/VectorSvg";

export function WaitAMinute() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-[50px]">
      <div className=" flex gap-[5px] justify-center">
        <div className=" flex jystify-center items-center">
          <VectorSvg />
        </div>
        <div className="text-[24px] flex jystify-center items-center">Geld</div>
      </div>

      <div>
        <div className="text-center">Icon</div>
        <div>Түр хүлээнэ үү...</div>
      </div>
    </div>
  );
}
