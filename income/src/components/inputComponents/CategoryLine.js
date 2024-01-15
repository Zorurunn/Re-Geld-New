"use client";

export default function CategoryLine({ icon, category }) {
  return (
    <div className="flex gap-[10px] p-[10px]">
      <div>{icon}</div>
      <div>{category}</div>
    </div>
  );
}
