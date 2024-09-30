import { useState } from "react";

export default function Register({setMenu}: Props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState();

    function registering(){

    }

    return (
        <section className="p-6 w-full lg:w-2/5 h-screen bg-zinc-800 m-auto flex items-center flex-wrap">
        <div className="w-full">
        <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img
            className="h-24 w-auto block mx-auto"
            src='https://www.researchgate.net/profile/Valeria-Ghisloti-Iared/publication/361670738/figure/fig1/AS:1173066331766785@1656692216313/Figura-3-Quadrado-Preto-Sobre-Fundo-Branco-Kazimir-Malevich.jpg'
            alt="Your Company"
          />
          </a>
        </div>
        <form onSubmit={registering}>
          <div className="col-span-full my-4">
            <label
              htmlFor="description"
              className="block text-base text-white font-medium leading-6"
            >
              Nome:
            </label>
            <div className="mt-1">
              <input
                type="name"
                required
                name="name"
                id="name"
                placeholder="Digite seu Nome..."
                className="bg-zinc-950 border-2 border-indigo-800 rounded text-white
                focus:border-indigo-800 focus:outline-none px-3 py-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

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

          <div className="col-span-full my-4">
            <label
              htmlFor="description"
              className="block text-base text-white font-medium leading-6"
            >
              Confirmar Senha:
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="Confirme sua senha..."
                className="bg-zinc-950 border-2 border-indigo-800 rounded text-white
                focus:border-indigo-800 focus:outline-none px-3 py-2 w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            className="bg-indigo-700 py-3 px-5 rounded w-full font-bold
          hover:bg-indigo-900 text-white"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
        {error}
        <p onClick={setMenu}
        className="text-gray-300 hover:text-gray-100 cursor-pointer text-center pt-4 font-bold">Já possuo conta</p>
        </div>
      </section>
    )
}

type Props = {
    setMenu: any
  }