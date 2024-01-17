import { useLayout } from "@/app/layout";
import styles from "@/components/Css/input.module.css";
import { createContext, useContext, useEffect, useState } from "react";
import CategoryLine from "./inputComponents/CategoryLine";
import { ChooseCategory } from "./inputComponents/ChooseCategory";
import { useRecordData, useSetDisplay } from "@/app/records/page";
import axios from "axios";
import { useData } from "./providers/DataProvider";
import { RxCross2 } from "react-icons/rx";
import { Spacer } from "./Spacer";

const types = [
  {
    label: "Expense",
    color: "#0166FF",
  },
  {
    label: "Income",
    color: "#16A34A",
  },
];
const dates = [
  {
    label: "Start Date",
    color: "#0166FF",
    id: "startDate",
  },
  {
    label: "End Date",
    color: "#D1D5DB",
    id: "endDate",
  },
];

const SelectedCat = createContext();

export const InputField = () => {
  const { postRecord } = useData();
  const {
    setIsDisplayInputField,
    visiblityInputField,
    setVisiblityInputField,
  } = useRecordData();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [geldType, setGeldType] = useState("Expense");

  const clicked = (e) => {
    const active = e.target.innerHTML;
    setGeldType(active);
  };

  const submitted = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const type = geldType;
    const iconName = "icon name here";
    const category = "category name here";
    const date = elements.Date.value;
    const amount = elements.amount.value;

    await postRecord(type, category, amount, date, iconName);

    setIsDisplayInputField((prev) => !prev);
  };
  {
    /* ${
          visiblityInputField ? "visible" : "invisible"
        } */
  }
  return (
    <SelectedCat.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <div
        className={`fixed top-[0] left-[0]  z-[20] w-full h-full flex justify-center items-center bg-[#00000070] ${
          visiblityInputField ? "visible" : "invisible"
        } `}
      >
        <form
          className=" flex justify-center items-center bg-[#fff] rounded-[10px] max-w-[800px] w-[60%] min-w-[600px]"
          onSubmit={submitted}
        >
          <div className="w-full flex flex-col justify-center items-center p-[20px]">
            <div className="w-full flex justify-between">
              <div className="text-[24px]">Add record</div>
              <div
                onClick={() => {
                  setIsDisplayInputField((prev) => !prev);
                }}
                className={`cursor-pointer flex justify-center items-center `}
              >
                <RxCross2 className="w-[35px] h-[35px]"/>
              </div>
            </div>
            <hr className="border-secondary border-[1px] w-full mt-[20px] mb-[20px]"/>

            <div className={styles.gridCont}>
              <div className="flex flex-col gap-[20px]">
                <div className="w-full h-fit flex bg-[#F3F4F6] rounded-[20px] ">
                  {types.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={clicked}
                        className={`w-full bg-[#F3F4F6] rounded-[20px] cursor-pointer grow p-[10px] text-center`}
                        style={{
                          background: `${
                            geldType === item.label ? item.color : "#F3F4F6"
                          }`,
                          color: `${
                            geldType === item.label ? "#fff" : "#1F2937"
                          }`,
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                <div className="w-full bg-[#F3F4F6] rounded-[10px] p-[15px] border-secondary border-[1px]">
                  <div>Amount</div>
                  <input
                    id="amount"
                    className="bg-[#F3F4F6]"
                    type="number"
                    placeholder={`000.00`}
                  />
                </div>

                <ChooseCategory />

                <div className="w-full flex gap-[20px]">
                  <div className="grow" style={{ flexBasis: 0 }}>
                    <div className="w-full">
                      <div>Date</div>
                      <input
                        id="Date"
                        type="date"
                        className={`w-full bg-primary rounded-[15px] border-secondary border-[1px] cursor-pointer p-[10px]`}
                      />
                    </div>
                  </div>
                  <div className="grow" style={{ flexBasis: 0 }}>
                    <div className="w-full">
                      <div>Time</div>
                      <input
                        id="Time"
                        type="time"
                        className={`w-full bg-primary rounded-[15px] border-secondary border-[1px] cursor-pointer p-[10px]`}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="w-full bg-mainBlue rounded-[10px] text-white px-[20px] h-[40px]"
                  style={{
                    background: `${
                      geldType === "Expense" ? "#0166FF" : "#16A34A"
                    }`,
                  }}
                  type="submit"
                >
                  Add record
                </button>
              </div>
              <div className={styles.gridBox}>
                <div className="flex flex-col justify-between gap-[20px]">
                  <div className="w-full flex flex-col gap-[10px]">
                    <div>Payee</div>
                    <input
                      id="payee"
                      className="bg-primary border-secondary border-[1px] w-full rounded-[10px] h-[60px] p-[20px]"
                      type="text"
                      placeholder={`write here`}
                    />
                  </div>

                  <div className="w-full flex flex-col gap-[10px] grow">
                    <div className="flex flex-col gap-[10px] h-full">
                    <div className="">Note</div>
                    <textarea
                      id="note"
                      className="bg-primary w-full h-[270px] border-[1px] border-secondary rounded-[10px] p-[20px] grow"
                      placeholder={`note is here`}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </SelectedCat.Provider>
  );
};

export const useCategory = () => useContext(SelectedCat);
