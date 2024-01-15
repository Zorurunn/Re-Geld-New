import { useData } from "@/app/layout";
import Link from "next/link";

export function SignUpButton(props) {
  // const { setIsHidden } = useData();
  return (
    <div>
      <Link href={"/currency"}>
        <button className="btn btn-active btn-primary w-full text-white bg-sky-700 border-none">
          {props.name}
        </button>
      </Link>
    </div>
  );
}
