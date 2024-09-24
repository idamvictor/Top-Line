import { Inter } from "next/font/google";
import Sidebar from "@/components/userUi/Sidebar";
import { poppins } from "@/Assets/fonts/index";
import Search from "@/components/userUi/Nav-components/Search";
const inter = Inter({subsets:["latin"]});

export default function Layout ({
    children,

}:Readonly<{
    children: React.ReactNode
}>
){
    return (
    <section className="min-h-screen flex  lg:flex-row">
  {/* Sidebar Section */}
  <div className="w-full lg:w-1/4 lg:h-screen">
    <Sidebar />
  </div>

  {/* Main Content Section */}
  <main className="w-full mx-9 lg:h-screen flex flex-col">
    <div className="p-4">
      <Search />
    </div>
    <div className="flex-grow p-4">
      {children}
    </div>
  </main>
</section>
    );
}