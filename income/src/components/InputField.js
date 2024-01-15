import { useLayout } from "@/app/layout";
import styles from "@/components/Css/input.module.css";
import { createContext, useContext, useEffect, useState } from "react";
import CategoryLine from "./inputComponents/CategoryLine";
import { ChooseCategory } from "./inputComponents/ChooseCategory";
import { useRecordData, useSetDisplay } from "@/app/records/page";
import axios from "axios";
import { useData } from "./providers/DataProvider";

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
    // const icon = selectedCategory.icon;
    // const category = selectedCategory.category;
    // const date = elements.Date.value;
    // const time = elements.Time.value;
    const amount = elements.amount.value;
    // const currency = "T";

    const token = localStorage.getItem("token");
console.log(type, amount, token);
    await postRecord(type, amount, token);

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
          className=" flex justify-center items-center bg-[#fff] rounded-[10px]"
          onSubmit={submitted}
        >
          <div className="w-full flex flex-col justify-center items-center p-[20px]">
            <div className="w-full flex justify-between">
              <div>Add record</div>
              <div
                onClick={() => {
                  setIsDisplayInputField((prev) => !prev);
                }}
                className={`cursor-pointer`}
              >
                X
              </div>
            </div>
            <hr />

            <div className={styles.gridCont}>
              <div className={styles.gridBox}>
                <div className="w-full h-fit flex bg-[#D1D5DB] rounded-[20px]">
                  {types.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={clicked}
                        className={`w-full bg-gray-50 rounded-[20px] cursor-pointer grow p-[10px]`}
                        style={{
                          background: `${
                            geldType === item.label ? item.color : "#D1D5DB"
                          }`,
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                <div className="w-full bg-gray-50">
                  <div>Amount</div>
                  <input
                    id="amount"
                    className="bg-gray-50"
                    type="text"
                    placeholder={`000.00`}
                  />
                </div>

                <ChooseCategory />

                <div className="w-full h-fit flex bg-gray-300 rounded-[20px] gap-[20px]">
                  <div>
                    <div>Date</div>
                    <input
                      id="Date"
                      type="date"
                      className={`w-full bg-gray-50 rounded-[20px] cursor-pointer grow p-[10px] border-[5px]`}
                    />
                  </div>
                  <div>
                    <div>Time</div>
                    <input
                      id="Time"
                      type="time"
                      className={`w-full bg-gray-50 rounded-[20px] cursor-pointer grow p-[10px] border-[5px]`}
                    />
                  </div>
                </div>

                <button
                  className="w-full bg-sky-400 rounded-[10px]"
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
                  <div className="w-full bg-gray-50">
                    <div>Payee</div>
                    <input
                      id="payee"
                      className="bg-gray-50"
                      type="text"
                      placeholder={`000.00`}
                    />
                  </div>

                  <div className="w-full bg-gray-50 grow">
                    <div>Note</div>
                    <textarea
                      id="note"
                      className="bg-gray-50 w-full"
                      placeholder={`note is here`}
                    />
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
