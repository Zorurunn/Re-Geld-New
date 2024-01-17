"use client";

import { TitleHeader } from "@/components/TitleHeader";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircleChar() {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="bg-[#fff] rounded-[10px] w-full h-full flex flex-col ">
      <TitleHeader
        title="Income-Expence"
        addition="display date!"
        className="grow"
      />
      <div className="grid grid-cols-[40%_60%] h-full">
        <div className="flex p-[20px] w-full h-full justify-center items-center">
          <Doughnut
            className="flex"
            data={data}
            options={{
              plugins: {
                legend: {
                  position: "right",
                },
              },
            }}
          />
        </div>
        <div>{data.labels}</div>
      </div>
    </div>
  );
}
