"use client";
import * as reactIconsAi from "react-icons/ai";
export default function CategoryLine({ name, icon, color }) {
  const Icon = reactIconsAi[icon];
  return (
    <div className="flex gap-[10px] p-[10px]">
      <div className="flex justify-center items-center">
        <Icon style={{ color: `${color}` }} />
      </div>

      <div>{name}</div>
    </div>
  );
}
