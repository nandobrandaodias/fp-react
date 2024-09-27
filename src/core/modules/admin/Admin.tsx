import Sidebar from "./Sidebar";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin(){
    const navigate = useNavigate();
    let navRef = useRef(navigate)
    
    useEffect(()=>{
        let token: any = localStorage.getItem("token")
        let user
        token ? user = JSON.parse(token) : user = null;
        if(!user || user?.role !== "Admin") navRef.current("/home");
      })

    return (
        <main className="w-screen h-screen flex bg-gradient-to-r from-indigo-900 to-indigo-600">
            <Sidebar />
            <div className="w-full h-screen bg-white ml-0 py-8 lg:ml-64">
                <section className="lg:w-11/12 mx-auto h-full bg-zinc-400 rounded-xl">
                </section>
            </div>
        </main>
    )
}