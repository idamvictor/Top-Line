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
      <section className="min-h-screen flex flex-row gap-28 lg:gap-5 ">
        {/* Sidebar Section */}
        <div className="w-full  md:w-1/4 max-md:hidden lg:h-screen">
          <Sidebar />
        </div>

        {/* Main Content Section */}
        <main className="w-full lg:mx-10  md:w-[60%] lg:w-[85%] lg:h-screen flex flex-col">
          <div className="p-4">
            <Search />
          </div>
          <div className="flex-grow p-4">{children}</div>
        </main>
      </section>
    );
}