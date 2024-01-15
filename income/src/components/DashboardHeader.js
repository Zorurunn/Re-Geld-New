"use client";
import { Container } from "@/components/Container";
import { VectorSvg } from "@/components/SVG/VectorSvg";
import Link from "next/link";
import { useAuthZ } from "./providers/AuthProviderZ";

export default function DashBoardHeader() {
  const { signOut } = useAuthZ();
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-[20px]">
          <div>
            <VectorSvg />
          </div>
          <Link href={"dashboard"}>DashBoard</Link>
          <Link href={"records"}>Records</Link>
        </div>

        <div className="flex gap-[20px]">
          <div onClick={signOut}>Sign out</div>
          <div>Record</div>
          <div>Pro</div>
        </div>
      </div>
    </div>
  );
}
