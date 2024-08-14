/**
 * React functional component representing a page with community information and social links.
 * Uses AOS library for animations.
 * @returns JSX element representing the community page.
 */
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TopLine Community",
  description: "A Community For Traders By Traders",
};

const Page = () => {
  return (
    <section className='h-[95vh] md:h-[85vh] relative gap-y-8 bg-gray-800 w-screen community flex  items-center justify-center flex-col'>
      {/* <Community /> */}
    </section>
  );
};
export default Page;
