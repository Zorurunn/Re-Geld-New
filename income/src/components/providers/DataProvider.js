"use client";
import { api } from "@/common";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DataContext = createContext();

export const DataProvider = ({ children } ={ }) => {
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
    amount,
    token
  ) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/records",

        {
          type,
          amount,
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
  const postCategory = async (icon, category, token) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/categories",

        {
          icon,
          category,
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
