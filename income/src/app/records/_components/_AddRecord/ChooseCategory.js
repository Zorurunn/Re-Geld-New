"use client";
import { FaCaretDown } from "react-icons/fa";

import { useLayout } from "@/app/layout";
import styles from "@/components/Css/input.module.css";
import { useEffect, useState } from "react";
import CategoryLine from "./CategoryLine";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useCategory } from "./AddRecord";
import { useRecordData } from "@/app/records/page";
import { useData } from "../../../../components/providers/DataProvider";

export function ChooseCategory() {
  const [isHidden, setIshidden] = useState(true);
  const { selectedCategory, setSelectedCategory } = useCategory();
  const {
    isDisplayAddCategory,
    setIsDisplayAddCategory,
    setVisiblityInputField,
  } = useRecordData();

  const { categories, postCategory } = useData();

  const categoryClicked = (event) => {
    const x = categories.filter((item, index) => {
      if (index === Number(event.target.id)) {
        return item;
      }
    });
    setSelectedCategory(x[0]);
    setIshidden((prev) => !prev);
  };

  const addCategory = (event) => {
    const token = localStorage.getItem("token");
    postCategory("●", "Rents", token);
  };

  return (
    <div className="w-full" id="Category">
      <div className=""> Category</div>
      <div
        onClick={() => {
          setIshidden((prev) => !prev);
        }}
        className="cursor-pointer flex justify-between p-[15px] bg-primary items-center rounded-[10px] border-secondary border-[1px]"
      >
        <div>
          {selectedCategory === null ? (
            <div className="flex gap-[10px] p-[10px]">
              <div className="text-textHolder"> Choose</div>
            </div>
          ) : (
            <CategoryLine {...selectedCategory} />
          )}
        </div>
        <div>
          <FaCaretDown />
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute top-0 left-0 bg-gray-50 w-full h-[300px] overflow-scroll shadow-md border-secondary  rounded-[10px]"
          style={{
            display: `${isHidden ? "none" : "block"}`,
          }}
        >
          <div
            className="flex gap-[10px] p-[10px] cursor-pointer felx items-center"
            onClick={() => {
              setIsDisplayAddCategory((prev) => !prev);
              setIshidden((prev) => !prev);
              setVisiblityInputField((prev) => !prev);
            }}
          >
            <div className="flex justify-center items-center bg-mainBlue rounded-[50%] w-[20px] h-[20px] text-white">
              +
            </div>
            <div className="text-black"> Add Category</div>
          </div>
          <hr />
          {categories.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedCategory(item);
                  setIshidden((prev) => !prev);
                }}
                className={`cursor-pointer`}
              >
                <CategoryLine {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
