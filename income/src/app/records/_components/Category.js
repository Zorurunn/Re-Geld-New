"use client";

import { AddCategory } from "@/components/inputComponents/AddCategory";
import CategoryCard from "./CategoryCard";
import { useData } from "@/components/providers/DataProvider";
import { useState } from "react";

export default function Category() {
  const { categories } = useData();
  const [iseHidden, setIsHidden] = useState(true);
  const closeWindow = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-[20px] bg-[#E5E7EB] ">
      <div className="flex justify-between">
        <p>Category</p>
        <p>clear</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        {categories.map((item) => {
          return <CategoryCard key={item.id} {...item} />;
        })}
        <div
          className=" w-full  rounded-[10px] text-[#1F2937] cursor-pointer"
          onClick={() => {
            setIsHidden((prev) => !prev);
          }}
        >
          + Add Category
        </div>
        {!iseHidden && <AddCategory closeWindow={closeWindow} />}
      </div>
    </div>
  );
}
