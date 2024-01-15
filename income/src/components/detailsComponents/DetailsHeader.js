"use client";
import { useRecordData } from "@/app/records/page";
import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const combination = ["Last 30 days", "Last 60 days", "Last 80 days"];

export default function DetailsHeader() {
  const { setStateUpToDate } = useRecordData();

  const [index, setIndex] = useState(0);

  const leftClicked = () => {
    if (index === 0) return;

    setIndex((prev) => prev - 1);
  };

  const rightClicked = () => {
    if (index === combination.length - 1) return;

    setIndex((prev) => prev + 1);
  };
  const changeState = (event) => {
    console.log(event.target.value);
    setStateUpToDate(event.target.value);
  };
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-[10px]">
        <div className="flex justify-center items-center">
          <IoIosArrowDropleftCircle
            className="cursor-pointer"
            onClick={leftClicked}
          />
        </div>
        <div>{combination[index]}</div>
        <div className="flex justify-center items-center">
          <IoIosArrowDroprightCircle
            className="cursor-pointer"
            onClick={rightClicked}
          />
        </div>
      </div>
      <div>
        <select name="showList" onChange={changeState}>
          <option value="1">Newest First</option>
          <option value="0">All</option>
        </select>
      </div>
    </div>
  );
}

{
  /* <div className="w-full flex justify-between">
<div className="flex gap-[10px]">
  <div className="flex justify-center items-center">
    <IoIosArrowDropleftCircle />
  </div>
  <div>Last 30 days</div>
  <div className="flex justify-center items-center">
    <IoIosArrowDroprightCircle />
  </div>
</div>
<div>
  <select name="showList">
    <option value="2">Newest First</option>
    <option value="1">medium</option>
    <option value="0">low</option>
  </select>
</div>
</div> */
}
