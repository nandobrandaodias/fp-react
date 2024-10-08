import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appFirebase, provider } from "../../utils/Firebase";

export default function Logging({ setMenu }: Props) {
  const navigate = useNavigate();
  const [error, setError] = useState<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navRef = useRef(navigate);

  async function googleAuth() {
    const token: any = await appFirebase.auth().signInWithPopup(provider)
    localStorage.setItem(
      "token",
      JSON.stringify({
        name: token.additionalUserInfo?.profile?.name ?? "Default",
        role: "User",
        url: token.additionalUserInfo?.profile?.picture,
        description: "Descrição",
        isGoogle: true
      })
    );
    navRef.current("/")
  }

  function login(e: any) {
    e.preventDefault();
    if (email !== "admin@admin.com" || password !== "1234") {
      setError (
        <p className="text-center py-2 mt-6 bg-red-500 border-2 border-red-600 rounded-lg">
          E-mail ou senha incorretos!
        </p>
      );
      return;
    }

    localStorage.setItem(
      "token",
      JSON.stringify({
        name: "Administrador",
        role: "Admin",
        url: "https://www.researchgate.net/profile/Valeria-Ghisloti-Iared/publication/361670738/figure/fig1/AS:1173066331766785@1656692216313/Figura-3-Quadrado-Preto-Sobre-Fundo-Branco-Kazimir-Malevich.jpg",
        description: "Administrador do Sistema!",
        isGoogle: false
      })
    );
    navRef.current("/admin");
  }

  return (
    <section className="p-6 w-full lg:w-2/5 h-screen bg-zinc-800 m-auto flex items-center flex-wrap">
      <div className="w-full">
        <div className="flex flex-shrink-0 items-center">
          <a href="/">
            <img
              className="h-24 w-auto block mx-auto"
              src="https://www.researchgate.net/profile/Valeria-Ghisloti-Iared/publication/361670738/figure/fig1/AS:1173066331766785@1656692216313/Figura-3-Quadrado-Preto-Sobre-Fundo-Branco-Kazimir-Malevich.jpg"
              alt="Your Company"
            />
          </a>
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
              hover:bg-indigo-900 text-white mb-3"
            type="submit"
          >
            Login
          </button>
          {error}
        </form>
        <p
          onClick={setMenu}
          className="bg-indigo-100 py-3 px-5 rounded w-full f text-indigo-700 cursor-pointer text-center pt-4 font-bold"
        >
          Cadastrar
        </p>
        <p className="text-gray-300 hover:text-gray-100 cursor-pointer text-center pt-4 font-bold">
          ou
        </p>
        <button
          className="bg-indigo-700 py-3 px-5 rounded w-full font-bold
              hover:bg-indigo-900 text-white mt-3"
          type="submit"
          onClick={googleAuth}
        >
          Entrar com o Google
        </button>
      </div>
    </section>
  );
}

type Props = {
  setMenu: any;
};
