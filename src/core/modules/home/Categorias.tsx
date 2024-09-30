import Categoria from "./fragments/Categoria";

export default function Categorias(){
    return(
        <div className="w-10/12 mx-auto flex justify-between gap-x-4 my-12">
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
        </div>
    )
}