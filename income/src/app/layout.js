"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { AuthProviderZ } from "@/components/providers/AuthProviderZ";
import { Container } from "@/components/Container";
import { DataProvider } from "@/components/providers/DataProvider";

const inter = Inter({ subsets: ["latin"] });

const LayoutContext = createContext();

export default function RootLayout({ children }) {
  const [categories, setCategories] = useState([
    {
      icon: "❤︎",
      category: "Food & Drink",
      id: 0,
    },
    {
      icon: "💡",
      category: "Electricity",
      id: 1,
    },
    {
      icon: "💲",
      category: "Rent",
      id: 2,
    },
    {
      icon: "👶",
      category: "Baby",
      id: 3,
    },
  ]);
  const [cards, setCards] = useState([
    {
      icon: categories[0].icon,
      id: 0,
      type: "income",
      amount: 100,
      category: categories[0].category,
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: "●",
      id: 0,
      type: "income",
      amount: 100,
      category: categories[1].category,
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: "●",
      id: 0,
      type: "income",
      amount: 100,
      category: categories[2].category,
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: categories[1].icon,
      id: 0,
      type: "expense",
      amount: 100,
      category: "cat and dog",
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: categories[2].icon,
      id: 0,
      type: "expense",
      amount: 100,
      category: "clothing $ branding",
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
  ]);
  const signIn = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: "test token",
          },
        }
      );

      const { token } = data;

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviderZ>
          <DataProvider>{children}</DataProvider>
        </AuthProviderZ>
        {/* <LayoutContext.Provider
          value={{ signIn, cards, setCards, categories, setCategories }}
        >
          {children}
        </LayoutContext.Provider> */}
      </body>
    </html>
  );
}

export const useLayout = () => useContext(LayoutContext);
