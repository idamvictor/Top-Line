"use client";
import { ArrowUpFromDot } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NavigateTop = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("#nav");
  };

  return (
    <>
      <ArrowUpFromDot
        onClick={handleNavigation}
        className=' fixed bottom-32 right-6 w-10 h-10 p-1 rounded-full bg-white'
      />
    </>
  );
};
export default NavigateTop;
