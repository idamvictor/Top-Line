/**
 * Functional component representing the Exchange section of the website.
 * Displays information about cryptocurrency exchange rates, reserves, and recent exchanges.
 * Allows users to discover more about the platform and sign up for services.
 * @returns JSX element containing the Exchange section content.
 */
import Exchange from "@/components/Exchange/Page";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TopLine Exchange",
  description: "TopLine Trading",
};
const ExchangePage = () => {
  return (
    <section className='overflow-x-hidden font-poppins bg-white'>
     <Exchange/>
    </section>
  );
};

export default ExchangePage;
