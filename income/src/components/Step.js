import { useStep } from "@/app/signUp/page";

export default function Step() {
  const { step } = useStep();
  return (
    <div className="relative w-[300px] h-[10px] bg-[gray] flex ">
      <div className="w-6 h-6 top-[-50%] left-[-5%] translate-y-[-5%] absolute  rounded-full z-10 bg-[#0166ff]"></div>
      <div className="w-6 h-6 top-[-60%] left-[-2%]  absolute text-white z-20">
        1
      </div>

      <div
        className={`relative w-[150px] h-[10px]`}
        style={{ background: step == 3 || step == 4 ? "#0166ff" : "gray" }}
      ></div>
      <div
        className="w-6 h-6 top-[-50%] left-[50%] translate-y-[-5%] absolute  rounded-full z-10"
        style={{ background: step == 3 || step == 4 ? "#0166ff" : "gray" }}
      ></div>
      <div className="w-6 h-6 top-[-60%] left-[52%]  absolute text-white z-20">
        2
      </div>

      <div
        className={`relative w-[150px] h-[10px]`}
        style={{ background: step == 4 ? "#0166ff" : "gray" }}
      ></div>
      <div
        className="w-6 h-6 top-[-50%] left-[95%] translate-y-[-5%] absolute  rounded-full z-10"
        style={{ background: step == 4 ? "#0166ff" : "gray" }}
      ></div>
      <div className="w-6 h-6 top-[-60%] left-[97%]  absolute text-white z-20">
        3
      </div>
    </div>
  );
}
