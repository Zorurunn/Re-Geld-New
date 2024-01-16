import { useStep } from "@/app/signUp/page";

export default function Step() {
  const { step } = useStep();

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center max-w-[400px] w-full">
        {new Array(3).fill(0).map((_, index) => (
          <Node
            key={index}
            isActive={index + 1 < Number(step)}
            order={index * 2 + 1}
          >
            {index + 1}
          </Node>
        ))}

        <div
          className="h-[4px] grow order-[2]"
          style={{
            background:  Number(step) > 2 ? "blue" : "#eee",
          }}
        />

        <div
          className="h-[4px] bg-[#eee] grow order-[4]"
          style={{
            background:  Number(step) > 3 ? "blue" : "#eee",
          }}
        />
      </div>
    </div>
  );

  
}

const Node = ({ children, isActive = false, order }) => {
  return (
    <div
      className="w-[32px] h-[32px] flex justify-center items-center rounded-[50%]"
      style={{
        order,
        color: isActive ? "#fff" : "#000",
        background: isActive ? "blue" : "#eee",
      }}
    >
      {children}
    </div>
  );
};

// return (
//   <div className="relative w-[300px] h-[10px] bg-[gray] flex ">
//     <div className="w-6 h-6 top-[-50%] left-[-5%] translate-y-[-5%] absolute  rounded-full z-10 bg-[#0166ff]"></div>
//     <div className="w-6 h-6 top-[-60%] left-[-2%]  absolute text-white z-20">
//       1
//     </div>

//     <div
//       className={`relative w-[150px] h-[10px]`}
//       style={{ background: step == 3 || step == 4 ? "#0166ff" : "gray" }}
//     ></div>
//     <div
//       className="w-6 h-6 top-[-50%] left-[50%] translate-y-[-5%] absolute  rounded-full z-10"
//       style={{ background: step == 3 || step == 4 ? "#0166ff" : "gray" }}
//     ></div>
//     <div className="w-6 h-6 top-[-60%] left-[52%]  absolute text-white z-20">
//       2
//     </div>

//     <div
//       className={`relative w-[150px] h-[10px]`}
//       style={{ background: step == 4 ? "#0166ff" : "gray" }}
//     ></div>
//     <div
//       className="w-6 h-6 top-[-50%] left-[95%] translate-y-[-5%] absolute  rounded-full z-10"
//       style={{ background: step == 4 ? "#0166ff" : "gray" }}
//     ></div>
//     <div className="w-6 h-6 top-[-60%] left-[97%]  absolute text-white z-20">
//       3
//     </div>
//   </div>
// );