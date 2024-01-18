import styles from "@/components/Css/lastRecord.module.css";
import Link from "next/link";
export function LastRecordLine({ type, icon, category, date, amount }) {
  return (
    <Link href={`/`}>
      <div className={styles.lineCont}>
        <div className="flex gap-[15px] justify-center items-center">
          <div className="flex  justify-center items-center">{icon}</div>
          <div>
            <div>{category}</div>
            <div className="text-[12px] text-gray-500">{date} hours ago</div>
          </div>
        </div>

        <div className="flex justify-center items-center text-[green]">
          <div>{amount}</div>
          {/* todo: currency dousuru ??? */}
          <div>Currency</div>
        </div>
      </div>
      {/* <div>{hr}</div> */}
    </Link>
  );
}
