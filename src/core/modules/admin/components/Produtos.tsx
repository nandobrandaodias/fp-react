import { Button, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import ModalProduto from "./fragments/ModalProduto";

export default function Produtos() {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState();
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products') || '[]'))

  useEffect(()=>{
    setProducts(JSON.parse(localStorage.getItem('products') || '[]'))
  }, [product])

  function openModal(prd?: any){
    setProduct(prd ?? '')
    setShowModal(true)
  }

  function deleteItem(id: any){
    if(window.confirm("Deseja excluir o item?")){
      let pIndex = products.findIndex((x: any)=>x.id === id);
      products.splice(pIndex, 1)
      localStorage.setItem("products", JSON.stringify(products))
      setProducts(JSON.parse(localStorage.getItem('products') || '[]'));
    }

    return;
  }

  let productList = products.map((product: any)=>{
    return(
      <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product.name}
      </th>
      <td className="px-6 py-4">{product.category}</td>
      <td className="px-6 py-4">R$ {(product.value).toFixed(2)}</td>
      <td className="px-6 py-4">
        <Dropdown label="" dismissOnClick={false} placement="bottom"
        renderTrigger={() =><svg
          className="w-5 h-5 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
          >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>}>
            <Dropdown.Item onClick={()=>openModal(product)}>Editar</Dropdown.Item>
            <Dropdown.Item onClick={()=>deleteItem(product.id)}>Excluir</Dropdown.Item>
        </Dropdown>
      </td>
    </tr>
    )
  })

  return (
    <div className="p-6">
      <h1 className="text-3xl text-slate-900 pb-1 font-semibold border-b-2 border-b-slate-900">
        Lista de Produtos
      </h1>

      <div className="relative overflow-x-auto">
        <Button
          type="button" onClick={() => openModal()}
          className="float-right text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm text-center me-2 my-3 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          + Novo Produto
        </Button>

        <ModalProduto showModal={showModal} setShowModal={setShowModal} product={product} setProduct={setProduct}/>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Preço
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {productList}
          </tbody>
        </table>
      </div>
    </div>
  );
}
