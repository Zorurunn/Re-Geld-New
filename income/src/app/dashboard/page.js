"use client";
import { Container } from "@/components/Container";
import { VectorSvg } from "@/components/SVG/VectorSvg";
import styles from "@/app/dashboard/_components/_css/page.module.css";
import { LastRecordsBar } from "@/app/dashboard/_components/LastRecordsBar";
import Link from "next/link";
import CashCard from "@/app/dashboard/_components/CashCard";
import IncomeCard from "@/app/dashboard/_components/IncomeCard";
import ExpenseCard from "@/app/dashboard/_components/ExpenseCard";
import BarChar from "@/app/dashboard/_components/BarChar";
import CircleChar from "@/app/dashboard/_components/CircleChar";
import DashBoardHeader from "@/app/dashboard/_components/DashboardHeader";
import { useAuthZ } from "@/components/providers/AuthProviderZ";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useData } from "@/components/providers/DataProvider";
import { Test } from "./_components/Test";

const DashBoardContext = createContext();
export default function DashBoard() {
  const [categories, setCategories] = useState([]);

  const router = useRouter();

  const { isLoggedIn } = useAuthZ();

  useEffect(() => {
    console.log(`dash`);
    if (!isLoggedIn) {
      router.push("/signIn");
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) return null;

  return (
    <DashBoardContext.Provider
      value={{
        // records,
        categories,
        setCategories,
      }}
    >
      <Container bg={"bg-gray-100"}>
        <DashBoardHeader />

        <div className="w-full h-full flex flex-col gap-[20px] pt-[40px] pb-[40px]">
          <div className="flex gap-[10px]">
            <div className="grow ">
              <div className="w-full pt-[56.25%]  relative">
                <div className="absolute top-0 left-0 w-full h-full ">
                  <CashCard />
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="w-full pt-[56.25%] relative">
                <div className="absolute top-0 left-0 w-full h-full">
                  <IncomeCard />
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="w-full pt-[56.25%] relative">
                <div className="absolute top-0 left-0 w-full h-full">
                  <ExpenseCard />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="grow ">
              <div className="w-full pt-[50%]  relative">
                <div className="absolute top-0 left-0 w-full h-full ">
                  <BarChar />
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="w-full pt-[50%] relative">
                <div className="absolute top-0 left-0 w-full h-full">
                  <CircleChar />
                </div>
              </div>
            </div>
          </div>
          <div>
            <LastRecordsBar />
          </div>
        </div>
      </Container>
    </DashBoardContext.Provider>
  );
}

export const useDashboardData = () => useContext(DashBoardContext);
