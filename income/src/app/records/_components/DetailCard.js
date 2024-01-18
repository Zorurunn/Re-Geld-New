"use client";
import * as reactIconsAi from "react-icons/ai";
export default function DetailCard({
  type,
  category,
  amount,
  date,
  payee,
  note,
  categoryColor,
}) {
  const Icon = reactIconsAi[category];
  console.log(Icon);

  console.log(category);
  return (
    <div className="w-full flex justify-between bg-gray-100 border-[2px] rounded-[10px] p-[15px]">
      <div className="flex gap-[10px]">
        <div>
          <input type="checkbox" />
        </div>
        <div>{/* <Icon /> */}</div>
        <div className="flex flex-col">
          <div>{category}</div>
          <div>{date}</div>
        </div>
      </div>
      <div style={{ color: type === "Income" ? "#16A34A" : "#F54949" }}>
        {type === "Income" ? "+" : "-"} {amount}
      </div>
    </div>
  );
}
