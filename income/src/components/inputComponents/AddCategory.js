"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ImCross } from "react-icons/im";
import { useData } from "../providers/DataProvider";

import { useState } from "react";
import { useRecordData } from "@/app/records/page";
import * as reactIconsAi from "react-icons/ai";

const colors = [
  "#0166FF",
  "#01B3FF",
  "#FF7B01",
  "#AE01FF",
  "#41CC00",
  "#0FF7B0",
  "#FF0101",
];
export function AddCategory({ closeWindow }) {
  const notify = () => toast("Input category name!!!");
  const { iconNames } = useData();
  const { setIsDisplayAddCategory, setVisiblityInputField } = useRecordData();

  // Icon set
  const [selecetedIconName, setSelecetedIconName] = useState("AiFillHome");
  const [selectedColor, setSelectedColor] = useState("#343330");
  const Icon = reactIconsAi[selecetedIconName];

  const [isHideIcons, setIsHideIcons] = useState(true);

  const { postCategory } = useData();

  const addCategoryClicked = (event) => {
    event.preventDefault();
    const { elements } = event.target;

    const name = elements.name.value;
    const icon = selecetedIconName;
    const color = selectedColor;
    if (name === "") {
      notify();
      return;
    }

    postCategory(name, icon, color);

    closeWindow();
  };

  return (
    <div className="fixed top-[0] left-[0]  z-[20] w-full h-full flex justify-center items-center bg-[#00000070]">
      <div className="w-[500px] h-[200px] rounded-[12px] bg-[#fff] flex flex-col justify-between p-[16px]">
        <div className="flex justify-between items-center">
          <div className="text-[20px]">Add Category</div>
          <div onClick={closeWindow}>
            <ImCross />
          </div>
        </div>

        <form
          onSubmit={addCategoryClicked}
          className="flex flex-col gap-[20px]"
        >
          <div className="w-full flex gap-[20px] h-[60px]">
            <div>
              <div
                className="cursor-pointer w-[60px] h-[60px] p-[10px] bg-[#fff] border-[1px] border-[#D1D5DB] rounded-[10px]"
                onClick={() => {
                  setIsHideIcons((prev) => !prev);
                }}
              >
                <Icon
                  className="w-[90%] h-[90%]"
                  style={{ color: `${selectedColor}` }}
                />
              </div>
              <div className=" relative">
                <div
                  className="absolute top-0 left-0 bg-[#fff] p-[20px] shadow-sm rounded-[10px] w-[250px] "
                  style={{
                    display: `${isHideIcons ? "none" : "block"}`,
                  }}
                >
                  <div className="flex flex-col gap-[10px]">
                    <div className="grid grid-cols-4 gap-[20px]">
                      {iconNames.map((item, index) => {
                        const Iconed = reactIconsAi[item];
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              setSelecetedIconName(item);
                            }}
                            className={`cursor-pointer`}
                          >
                            <Iconed className="w-[30px] h-[30px] " />
                          </div>
                        );
                      })}
                    </div>
                    <hr />
                    <div className="justify-between w-full h-full flex gap-[10px]">
                      {colors.map((item) => {
                        return (
                          <div
                            className="w-[20px] h-[20px] rounded-[50%] p-[5px]"
                            style={{
                              backgroundColor: `${item}`,
                              border: `${
                                selectedColor === item
                                  ? "2px solid #343330"
                                  : "0px solid #343330"
                              }`,
                            }}
                            onClick={() => {
                              setSelectedColor(item);
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full border-[#D1D5DB] h-full"
                id="name"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-info rounded-[20px] h-[40px] hover:bg-[green] w-full bg-mainGreen border-0 text-white"
          >
            Add Category
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
