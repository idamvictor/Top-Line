import React from "react";
import Contact from "@/components/Contact/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "TopLine Trading",
};
const Page = () => {
  return (
    <section>
      <Contact />
    </section>
  );
};

export default Page;
