import { Inter } from "next/font/google";
import Navbar2 from "@/components/userUi/Navbar2";
import Sidebar from "@/components/userUi/Sidebar";
import { poppins } from "@/Assets/fonts/index";

const inter = Inter({subsets:["latin"]});

export default function Layout ({
    children,

}:Readonly<{
    children: React.ReactNode
}>
){
    return(
                <main >
                    <Sidebar/>
                    <Navbar2/>
                    {children}
                </main>

    )
}