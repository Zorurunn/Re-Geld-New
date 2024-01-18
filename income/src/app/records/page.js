"use client";
import { Container } from "@/components/Container";
import recStyle from "@/components/Css/records.module.css";
import DashBoardHeader from "@/app/dashboard/_components/DashboardHeader";
import { AddRecord } from "@/app/records/_components/_AddRecord/AddRecord";
import Details from "@/app/records/_components/Details";
import DetailsHeader from "@/app/records/_components/DetailsHeader";
import { AddCategory } from "@/components/inputComponents/AddCategory";
import { useData } from "@/components/providers/DataProvider";
import AmountRange from "@/app/records/_components/AmountRange";
import Category from "@/app/records/_components/Category";
import RecordHeader from "@/app/records/_components/RecordHeader";
import Types from "@/app/records/_components/Types";
import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const SetIsDisplayContext = createContext();
export default function Records() {
  const [isDisplayInputField, setIsDisplayInputField] = useState(false);
  const [isDisplayAddCategory, setIsDisplayAddCategory] = useState(false);
  const [visiblityInputField, setVisiblityInputField] = useState(true);
  const [stateUpToDate, setStateUpToDate] = useState(0);
  const [amountMax, setAmountMax] = useState(5000);
  const [amountMin, setAmountMin] = useState(0);
  const [amountValue, setAmountValue] = useState(1000);

  const closeWindow = () => {
    setVisiblityInputField((prev) => !prev);
    setIsDisplayAddCategory((prev) => !prev);
  };

  useEffect(() => {}, []);
  return (
    <Container bg={"bg-gray-100"}>
      <SetIsDisplayContext.Provider
        value={{
          isDisplayInputField,
          setIsDisplayInputField,
          isDisplayAddCategory,
          setIsDisplayAddCategory,
          visiblityInputField,
          setVisiblityInputField,
          stateUpToDate,
          setStateUpToDate,
          amountMax,
          setAmountMax,
          amountMin,
          setAmountMin,
          amountValue,
          setAmountValue,
        }}
      >
        {isDisplayInputField && <AddRecord />}
        {isDisplayAddCategory && <AddCategory closeWindow={closeWindow} />}

        <DashBoardHeader />
        <div className={recStyle.gridCont}>
          <div className={recStyle.gridCols}>
            <RecordHeader />
            <Types />
            <Category />
            <AmountRange />
          </div>
          <div className={recStyle.gridCols}>
            <DetailsHeader />
            <Details />
          </div>
        </div>
      </SetIsDisplayContext.Provider>
    </Container>
  );
}

export const useRecordData = () => useContext(SetIsDisplayContext);
