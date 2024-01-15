"use client";
import { api } from "@/common";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContextZ = createContext();

export const AuthProviderZ = ({ children }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post("/sign-in", {
        email,
        password,
      });

      const { token } = data;
      console.log(token);

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    router.push("/signIn");
  };

  const signUp = async (email, password) => {
    try {
      const { data } = await api.post("/sign-up", {
        email,
        password,
      });

      const { token } = data;
      console.log(token);

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);
  }, []);

  return (
    <AuthContextZ.Provider
      value={{
        signIn,
        signOut,
        signUp,
        isLoggedIn,
      }}
    >
      {isReady && children}
    </AuthContextZ.Provider>
  );
};

export const useAuthZ = () => useContext(AuthContextZ);
