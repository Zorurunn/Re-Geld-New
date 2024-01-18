"use client";
import { api } from "@/common";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import * as reactIconsAi from "react-icons/ai";

const DataContext = createContext();
const iconNames = [
  "AiFillAmazonSquare",
  "AiFillAccountBook",
  "AiFillAlert",
  "AiFillAliwangwang",
  "AiFillApi",
  "AiFillAmazonSquare",
  "AiFillApple",
  "AiFillAudio",
  "AiFillHome",
  "AiFillBackward",
  "AiFillAppstore",
  "AiFillAndroid",
  "AiFillAudio",
  "AiFillApi",
  "AiFillBehanceSquare",
  "AiFillHome",
];

export const DataProvider = ({ children } = {}) => {
  const router = useRouter();
  const [refresh, setRefresh] = useState(0);
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);
  const [hiddenCategories, setHiddenCategories] = useState([]);
  const [displayType, setDisplayType] = useState("All");

  // GET Records
  const getRecords = async (token) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3002/records",

        {
          headers: {
            Authorization: token,
          },
        }
      );

      setRecords(data.records);
    } catch (error) {
      console.log(error);
    }
  };

  // GET Gategory
  const getCategories = async (token) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3002/categories",

        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  // POST Record
  const postRecord = async (
    type,
    category,
    amount,
    date,
    payee,
    note,
    categoryColor
  ) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        "http://localhost:3002/records",

        {
          type,
          category,
          amount,
          date,
          payee,
          note,
          categoryColor,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(data);
      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // POST Category
  const postCategory = async (name, icon, color) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:3002/categories",

        {
          name,
          icon,
          color,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res);
      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // use Effect
  useEffect(() => {
    const token = localStorage.getItem("token");

    getRecords(token);
    getCategories(token);
  }, [refresh]);

  return (
    <DataContext.Provider
      value={{
        records,
        setRecords,
        categories,
        setCategories,
        getRecords,
        postRecord,
        postCategory,
        hiddenCategories,
        setHiddenCategories,
        displayType,
        setDisplayType,
        iconNames,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
