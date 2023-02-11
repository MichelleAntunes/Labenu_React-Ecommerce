import React, { useState, useEffect } from "react";
import { BodyContainer, BodyArticle, ImgBody } from "./style";
import Nav from "./Nav";
const url = "http://localhost:3001/wines";

function Body() {
  const [produts, setProduts] = useState([]);
  const [buscaName, setBuscaName] = useState("");
  const [buscaOrdem, setBuscaOredem] = useState("");
  const [buscaPriceMax, setBuscaPriceMax] = useState();
  const [buscaPriceMin, setBuscaPriceMin] = useState();
  const [cart, setCart] = useState([]);
  const fitData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProduts(data);
  };
  useEffect(() => {
    fitData();
  }, []);

  const calcTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const handleRemove = (index) => {
    setCart((remove) => remove.filter((_, i) => i !== index));
  };
  const handleClick = (product) => {
    const filterProduct = {
      name: product.name,
      price: product.price,
    };

    setCart([...cart, filterProduct]);
  };
  return (
    <BodyContainer>
      <Nav
        buscaName={buscaName}
        setBuscaName={setBuscaName}
        buscaOrdem={buscaOrdem}
        setBuscaOredem={setBuscaOredem}
        buscaPriceMax={buscaPriceMax}
        setBuscaPriceMax={setBuscaPriceMax}
        buscaPriceMin={buscaPriceMin}
        setBuscaPriceMin={setBuscaPriceMin}
        calcTotal={calcTotal}
        handleRemove={handleRemove}
        cart={cart}
      />

      {produts
        .filter((element) => {
          if (element.name.toLowerCase().includes(buscaName.toLowerCase())) {
            return element;
          }
        })

        .sort((a, b) => {
          if (buscaOrdem === "Alfabeto Crescente") {
            return a.name.localeCompare(b.name);
          } else if (buscaOrdem === "Alfabeto Decrescente") {
            return b.name.localeCompare(a.name);
          } else if (buscaOrdem === "Preço Crescente") {
            return a.price - b.price;
          } else if (buscaOrdem === "Preço Decrescente") {
            return b.price - a.price;
          } else if (buscaOrdem === "Ordenar") {
            return produts;
          }
        })
        .filter((element) => {
          if (element.price <= buscaPriceMax) {
            return element;
          } else if (!buscaPriceMax) {
            return produts;
          }
        })
        .filter((element) => {
          if (element.price >= buscaPriceMin) {
            return element;
          } else if (!buscaPriceMin) {
            return produts;
          }
        })
        .map((element, index) => (
          <BodyArticle key={index}>
            <ImgBody src={element.image} alt={element.name} />
            <p>Nome: {element.name}</p>
            <p>{element.description}</p>
            <p> Marca: {element.brand}</p>
            <p>Preço:R${element.price}</p>

            <button onClick={() => handleClick(element)}>
              Adicionar ao carrinho
              <span class="material-symbols-outlined">shopping_cart</span>
            </button>
          </BodyArticle>
        ))}
    </BodyContainer>
  );
}
export default Body;
