"use client";

import { useContext, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useLayout } from "@/app/layout";
import { useData } from "../providers/DataProvider";

export default function Category() {
  const { categories, setCategories, hiddenCategories } = useData();

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
        <div className=" w-full  rounded-[10px] text-[#1F2937] cursor-pointer">
          + Add Category
        </div>
      </div>
    </div>
  );
}
