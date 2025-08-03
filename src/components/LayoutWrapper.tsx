// src/components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Chatbot from "./Chatbot";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Hide navbar on embed widget routes
    if (pathname?.startsWith("/embed/widget")) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [pathname]);

  return (
    <>
      <Chatbot />
      <main className="h-screen flex flex-col justify-center items-center">
        {showNavbar && <Navbar />}
        {children}
      </main>
    </>
  );
}
