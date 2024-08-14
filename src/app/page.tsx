import type { Metadata } from "next";
import HomePage from "./HomePage";

 export const metadata: Metadata = {
   title: "TopLine Trading",
   description: "Your one stop for everything Finance",
 };
export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}
