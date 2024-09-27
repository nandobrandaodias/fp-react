import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logging from "./Logging";
import Register from "./Register";

export default function Login() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(true);
  let navRef = useRef(navigate)

  useEffect(()=>{
    if(localStorage.getItem("token")) navRef.current('/home')
  })

  function switchMenu(){
    setMenu(!menu);
  }

  return (
    <main className="w-screen h-screen flex bg-gradient-to-r from-indigo-900 to-indigo-600">
        {
            menu ? <Logging setMenu={switchMenu} /> : <Register setMenu={switchMenu} />
        }
    </main>
  );
}


