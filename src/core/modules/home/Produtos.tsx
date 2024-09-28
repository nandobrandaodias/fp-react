import Paginator from "./components/Paginator";
import Produto from "./components/Produto";

export default function Produtos(){
    return(
        <div className="w-12/12 mx-auto flex justify-center flex-wrap gap-2 my-4">
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