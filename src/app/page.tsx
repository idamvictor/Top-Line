import Homepage from "@/components/Home/page";
import type { Metadata } from "next";

 export const metadata: Metadata = {
   title: "TopLine Trading",
   description: "Your one stop for everything Finance",
 };
export default function Home() {
  return (
    <main className="">
      <Homepage/>
    </main>
  );
}
