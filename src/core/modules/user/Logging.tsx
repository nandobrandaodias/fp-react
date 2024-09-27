import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logging({setMenu}: Props){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navRef = useRef(navigate)


    function login(e: any) {
        e.preventDefault();
        if (email !== "admin@admin.com" || password !== "1234") {
          setError('<p className="text-center py-2 mt-6 bg-red-500 border-2 border-red-600 rounded-lg">E-mail ou senha incorretos!</p>');
          return;
        }
    
        localStorage.setItem(
          "token",
          JSON.stringify({
            name: "Administrador",
            role: "Admin",
            url: "https://www.researchgate.net/profile/Valeria-Ghisloti-Iared/publication/361670738/figure/fig1/AS:1173066331766785@1656692216313/Figura-3-Quadrado-Preto-Sobre-Fundo-Branco-Kazimir-Malevich.jpg",
            description: "Administrador do Sistema!",
          })
        );
        navRef.current("/admin");
      }

    return (
            <section className="p-6 w-1/3 bg-zinc-800 m-auto rounded-lg">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-24 w-auto block mx-auto"
                src='https://www.researchgate.net/profile/Valeria-Ghisloti-Iared/publication/361670738/figure/fig1/AS:1173066331766785@1656692216313/Figura-3-Quadrado-Preto-Sobre-Fundo-Branco-Kazimir-Malevich.jpg'
                alt="Your Company"
              />
            </div>
            <form onSubmit={login}>
              <div className="col-span-full my-4">
                <label
                  htmlFor="description"
                  className="block text-base text-white font-medium leading-6"
                >
                  E-mail:
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Digite seu E-mail..."
                    className="bg-zinc-950 border-2 border-indigo-800 rounded text-white
                    focus:border-indigo-800 focus:outline-none px-3 py-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
    
              <div className="col-span-full my-4">
                <label
                  htmlFor="description"
                  className="block text-base text-white font-medium leading-6"
                >
                  Senha:
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Digite sua senha..."
                    className="bg-zinc-950 border-2 border-indigo-800 rounded text-white
                    focus:border-indigo-800 focus:outline-none px-3 py-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
    
              <button
                className="bg-indigo-700 py-3 px-5 rounded w-full font-bold
              hover:bg-indigo-900 text-white"
                type="submit"
              >
                Login
              </button>
            {error}
            </form>
            <p onClick={setMenu}
            className="text-gray-300 hover:text-gray-100 cursor-pointer text-center pt-4 font-bold">Cadastrar</p>
          </section>
    )
}

type Props = {
    setMenu: any
  }