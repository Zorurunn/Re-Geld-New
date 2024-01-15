import { VectorSvg } from "@/components/SVG/VectorSvg";

export default function LogoName() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex gap-[5px] justify-center">
        <div className=" flex jystify-center items-center">
          <VectorSvg />
        </div>
        <div className="text-[24px] flex jystify-center items-center">Geld</div>
      </div>
    </div>
  );
}
