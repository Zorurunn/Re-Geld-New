"use client";

import { useRecordData } from "@/app/records/page";
import { useState } from "react";

export default function AmountRange() {
  const {
    amountMax,
    setAmountMax,
    amountMin,
    setAmountMin,
    amountValue,
    setAmountValue,
  } = useRecordData();

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <p>Amount Range</p>
      <div className="flex gap-[10px]">
        <input
          className="border-[2px] rounded-[10px] h-[40px]"
          placeholder={amountMin}
          onChange={(e) => {
            setAmountMin(e.target.value);
          }}
        />
        <input
          className="border-[2px] rounded-[10px] h-[40px]"
          placeholder={amountMax}
          onChange={(e) => {
            setAmountMax(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <div className="w-full">
          <input
            type="range"
            min={amountMin}
            max={amountMax}
            onChange={(e) => {
              setAmountValue(e.target.value);
            }}
            className="bg-[blue] w-full"
            step={amountMax / 20}
          />
        </div>
        <div className="flex justify-between">
          <div>{amountMin}</div>
          <div>{amountValue}</div>
        </div>
      </div>
    </div>
  );
}
