"use client";
import { FaRegEye, FaEyeSlash } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

import { useEffect, useState } from "react";
import { useRecordData } from "@/app/records/page";
import { useData } from "../providers/DataProvider";

export default function CategoryCard({ category }) {
  const { hiddenCategories, setHiddenCategories } = useData(false);

  const isHidden = hiddenCategories.includes(category);

  const handleClick = () => {
    if (isHidden) {
      const newHiddenCategories = hiddenCategories.filter((item) => {
        return item !== category;
      });
      setHiddenCategories(newHiddenCategories);
      return;
    }
    setHiddenCategories([...hiddenCategories, category]);
  };

  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-[5px]">
        {/* Eye Icon */}
        <div className="flex justify-center items-center cursor-pointer">
          <button type="button" onClick={handleClick}>
            {isHidden ? <FaEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        {/* Category name */}
        <div style={{ color: isHidden ? "gray" : "black" }}>{category}</div>
      </div>
      <div className="flex justify-center items-center">
        <IoMdArrowDropright />
      </div>
    </div>
  );
}
