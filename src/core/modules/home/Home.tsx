import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home(){
    const user = localStorage.getItem("token") || ""
    return (
        <>
            <Navbar user={user}/>
            <section className="w-full">
            <Outlet />
            </section>
            <Footer />
        </>
    )
}