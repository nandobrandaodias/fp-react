import Categorias from "../Categorias";
import Produtos from "../Produtos";

export default function HomePage(){
    return (
    <>
    <section className="w-full bg-zinc-500 h-80"></section>
    <Categorias />
    <Produtos />
    </>
)}