import { Button, FileInput, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

export default function ModalProduto({
  showModal,
  setShowModal,
  product,
  setProduct,
}: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [value, setValue] = useState(0);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setName(product?.name ?? "");
    setCategory(product?.category ?? "");
    setValue(product?.value ?? "");
    setSlug(product?.slug ?? "");
  }, [product]);

  function saveProduct() {
    const produtos: Array<any> = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    let novoProduto;

    if (produtos.length) {
      let higherID = Math.max(...produtos.map((x: any) => x.id));
      novoProduto = {
        id: product?.id ?? higherID + 1,
        name: name,
        category: category,
        value: value,
        slug: slug,
      };
    } else {
      novoProduto = {
        id: 1,
        name: name,
        category: category,
        value: value,
        slug: slug,
      };
    }

    if (!product) {
      produtos.unshift(novoProduto);
      localStorage.setItem("products", JSON.stringify(produtos));
    }

    if (product) {
      let pIndex = produtos.findIndex((x) => x.id === product.id);
      produtos[pIndex] = novoProduto;
      localStorage.setItem("products", JSON.stringify(produtos));
    }

    setProduct(undefined);
    setShowModal(false);
  }

  return (
    <>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          {product ? "Edição de Produto" : "Cadastro de Produto"}
        </Modal.Header>
        <Modal.Body>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nome do Produto" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Nome do Produto..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                shadow
              />
            </div>

            <div className="w-full   ">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Categoria do Produto" />
              </div>
              <TextInput
                id="comment"
                placeholder="Categoria..."
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Valor do Produto" />
              </div>
              <TextInput
                id="comment"
                placeholder="Valor..."
                required
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Código do Produto" />
              </div>
              <TextInput
                id="comment"
                placeholder="Código do Produto..."
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => saveProduct()}>Salvar</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

type Props = {
  showModal: boolean;
  setShowModal: any;
  product?: any;
  setProduct?: any;
};
