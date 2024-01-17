import { useState } from "react";
import { LastRecordLine } from "../../../components/LastRecordLine";
import { HomeSvg } from "../../../components/SVG/HomeSvg";
import styles from "@/components/Css/lastRecord.module.css";
import { useDashboardData } from "@/app/dashboard/page";

export function LastRecordsBar() {
  const { records } = useDashboardData();
  const [data, setData] = useState([
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
  ]);

  return (
    <div
      className={`${styles.allCont} `}
      style={{
        gridTemplateRows: `repeat(${data.length + 1} ,1fr)`,
      }}
    >
      <div className={styles.head}>
        <div className="p-[15px]">Last Records</div>
        <hr className="w-full" />
      </div>

      {records.map((item) => {
        return <LastRecordLine key={item.id} {...item} />;
      })}
    </div>
  );
}
