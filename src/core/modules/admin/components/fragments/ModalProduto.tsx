import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

export default function ModalProduto({
  showModal,
  setShowModal,
  product,
  setProduct,
}: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState<number>();
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
      const higherID = Math.max(...produtos.map((x: any) => x.id));
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
      const pIndex = produtos.findIndex((x) => x.id === product.id);
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
          <div className="w-full mb-2">
            <div className="mb-1 block">
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

          <div className="w-full mb-2">
            <div className="mb-1 block">
              <Label htmlFor="categoria" value="Categoria" />
            </div>
            <Select id="categoria" required
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
              <option>Smartphone</option>
              <option>Computador</option>
              <option>Acessórios</option>
              <option>Dispositivo Eletrônico</option>
              <option>Outros</option>
            </Select>
          </div>

          <div className="w-full mb-2">
            <div className="mb-1 block">
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

          <div className="w-full mb-2">
            <div className="mb-1 block">
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
