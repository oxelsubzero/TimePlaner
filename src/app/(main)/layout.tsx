"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/header";
import "../globals.css";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(true);
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-screen overflow-hidden">
          <Sidebar show={show} />

          <div className=" flex flex-col  bg-slate-100 w-full h-full overflow-y-scroll ">
            <Header show={show} setShow={setShow} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
