"use client";

import { useData } from "../providers/DataProvider";

export default function Types() {
  const { setDisplayType } = useData();
  const types = ["All", "Income", "Expense"];
  const setCheckedState = (event) => {
    let type = event.target.value;
    // if (type === "All") {
    //   type = "";
    // }
    setDisplayType(type);
  };
  return (
    <div className="w-full flex flex-col gap-[20px] bg-[#E5E7EB]">
      <p>Types</p>
      {types.map((item) => {
        return (
          <div key={item} className="flex gap-[10px]">
            <input
              type="radio"
              id={item}
              name="type"
              value={item}
              defaultChecked={item === "All" ? true : false}
              onChange={setCheckedState}
            />
            <label forhtml={"all"}>{item}</label>
          </div>
        );
      })}
    </div>
  );
}
