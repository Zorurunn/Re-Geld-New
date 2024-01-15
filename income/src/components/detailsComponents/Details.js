"use client";

import { useState } from "react";
import DetailCard from "./DetailCard";
import { useLayout } from "@/app/layout";
import { useData } from "../providers/DataProvider";
import { useRecordData } from "@/app/records/page";

export default function Details() {
  const { records, setRecords, displayType } = useData();
  const { stateUpToDate, amountMax, amountMin, amountValue } = useRecordData();

  const { hiddenCategories } = useData();

  const currentDate = new Date();

  const isToday = (givenDate) => {
    return givenDate.toDateString() === currentDate.toDateString();
  };

  const isYesterday = (givenDate) => {
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    return givenDate.toDateString() === yesterday.toDateString();
  };

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="w-full flex justify-between bg-gray-100 border-[2px] rounded-[10px] p-[15px]">
        <div className="flex gap-[5px]">
          <input type="checkbox" />
          <div>Select All</div>
        </div>
        <div>100</div>
      </div>
      <div>
        {stateUpToDate === "1" ? (
          <div className="flex flex-col gap-[30px]">
            <div>
              <div>Today</div>

              <div className="flex flex-col gap-[10px]">
                {records
                  .filter((item) => {
                    return Number(item.amount) <= amountValue;
                  })
                  .filter((item) => {
                    return isToday(new Date(item.date));
                  })
                  .filter((el) => {
                    const checkReturnCategory = hiddenCategories.filter(
                      (hidden) => {
                        return el.category === hidden;
                      }
                    );
                    if (checkReturnCategory[0]) {
                      return;
                    }
                    return el;
                  })
                  .filter((el) => {
                    if (displayType === "All") {
                      return el;
                    } else {
                      return el.type === displayType;
                    }
                  })
                  .map((item) => {
                    return <DetailCard key={item.id} {...item} />;
                  })}
              </div>
            </div>
            <div>
              <div>Yesteday</div>
              <div className="flex flex-col gap-[10px]">
                {records
                  .filter((item) => {
                    return Number(item.amount) <= amountValue;
                  })
                  .filter((item) => {
                    return isYesterday(new Date(item.date));
                  })
                  .filter((el) => {
                    const checkReturnCategory = hiddenCategories.filter(
                      (hidden) => {
                        return el.category === hidden;
                      }
                    );
                    if (checkReturnCategory[0]) {
                      return;
                    }
                    return el;
                  })
                  .filter((el) => {
                    if (displayType === "All") {
                      return el;
                    } else {
                      return el.type === displayType;
                    }
                  })
                  .map((item) => {
                    return <DetailCard key={item.id} {...item} />;
                  })}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[20px]">
            <div>All Records</div>
            <div className="flex flex-col gap-[10px]">
              {records
                .filter((item) => {
                  return Number(item.amount) <= amountValue;
                })
                .filter((el) => {
                  const checkReturnCategory = hiddenCategories.filter(
                    (hidden) => {
                      return el.category === hidden;
                    }
                  );
                  if (checkReturnCategory[0]) {
                    return;
                  }
                  return el;
                })
                .filter((el) => {
                  if (displayType === "All") {
                    return el;
                  } else {
                    return el.type === displayType;
                  }
                })
                .map((item) => {
                  return <DetailCard key={item.id} {...item} />;
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
