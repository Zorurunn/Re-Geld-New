"use client";

import { useRecordData } from "@/app/records/page";

export default function RecordHeader() {
  const { setIsDisplayInputField } = useRecordData();
  const clicked = () => {
    setIsDisplayInputField((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col gap-[20px] bg-[#E5E7EB]">
      <div className="text-[24px]">Records</div>
      <button
        onClick={clicked}
        className="w-full h-[30px] bg-[blue] text-white rounded-[20px]"
      >
        + Add
      </button>

      <input
        className="w-full border-[2px] rounded-[5px] h-[30px] pl-[20px]"
        type="text"
        placeholder="search"
      />
    </div>
  );
}
