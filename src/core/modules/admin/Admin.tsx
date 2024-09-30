import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Painel from "./components/Painel";
import Dashboard from "./components/Dashboard";
import Produtos from "./components/Produtos";
import Usuarios from "./components/Usuarios";

export default function Admin(){
    const [area, setArea] = useState(1);
    const navigate = useNavigate();
    let navRef = useRef(navigate)
    
    useEffect(()=>{
        let token: any = localStorage.getItem("token")
        let user
        token ? user = JSON.parse(token) : user = null;
        if(!user || user?.role !== "Admin") navRef.current("/");
      })

      function renderArea(){
        console.log(area)
        switch(area){
            case 1: 
                return <Painel setArea={setArea}/>
            case 2: 
                return <Dashboard/>
            case 3:
                return <Produtos/>
            case 4:
                return <Usuarios/>
            case 5:
                return <Painel setArea={setArea}/>
            default:
                setArea(1);
        }
      }

    return (
        <main className="w-screen h-screen flex bg-gradient-to-r from-indigo-900 to-indigo-600">
            <Sidebar setArea={setArea}/>
            <div className="w-full h-screen bg-white ml-0 lg:ml-64">
                <section className="w-full mx-auto h-full bg-zinc-100 overflow-y-auto p-2">
                    {
                        renderArea()
                    }
                </section>
            </div>
        </main>
    )
}