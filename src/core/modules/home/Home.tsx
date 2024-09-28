import Categorias from "./Categorias";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Produtos from "./Produtos";

export default function Home(){
    return (
        <>
            <Navbar />
            <section className="w-full bg-zinc-500 h-80"></section>
            <Categorias />
            <Produtos />
            <Footer />
        </>
    )
}