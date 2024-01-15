import { useState } from "react";

export const Container = (props) => {
  return (
    <div className={`${props.bg} w-screen relative  dark:text-[#D1D5DB]`}>
      <div
        className={"w-screen  overflow-hidden m-auto max-w-[1500px] px-[16px]"}
      >
        <div className={"pt-[90px] pb-[90px] h-screen"}>{props.children}</div>
      </div>
    </div>
  );
};
