"use client";
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
