import Paginator from "./components/Paginator";
import Produto from "./components/Produto";

export default function Produtos(){
    return(
        <div className="w-10/12 mx-auto flex flex-wrap justify-evenly gap-4 my-4">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Paginator />
        </div>
    )
}