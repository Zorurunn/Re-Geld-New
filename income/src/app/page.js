"use client";
import { Container } from "@/components/Container";
import { WaitAMinute } from "@/components/WaitAMinute";
import { WelcomePage } from "@/components/WelcomePage";
import Link from "next/link";
import { createContext, useContext, useState } from "react";

export default function Home() {
  return (
    <div>
      <Link href={"/dashboard"}> Go DashBoard</Link>
    </div>
  );
}

// const usePro = () => useContext(Pro);
