import React from "react";
import { NavContainer, InputNav, SelectNav } from "./styled";

function Nav({
  buscaName,
  setBuscaName,
  buscaOrdem,
  setBuscaOredem,
  buscaPriceMax,
  setBuscaPriceMax,
  buscaPriceMin,
  setBuscaPriceMin,
  calcTotal,
  handleRemove,
  cart,
}) {
  //
  return (
    <>
      <NavContainer>
        <label htmlFor="name">Busca pelo nome:</label>
        <InputNav
          type="text"
          id="name"
          value={buscaName}
          onChange={(e) => {
            setBuscaName(e.target.value);
          }}
        />
        <SelectNav
          value={buscaOrdem}
          onChange={(e) => {
            setBuscaOredem(e.target.value);
          }}
        >
          <option value="Ordenar">Ordenar</option>
          <option value="Alfabeto Crescente">Alfabeto Crescente</option>
          <option value="Alfabeto Decrescente">Alfabeto Decrescente</option>
          <option value="Preço Crescente">Preço Crescente</option>
          <option value="Preço Decrescente">Preço Decrescente</option>
        </SelectNav>
        <label htmlFor="price_max">Valor máximo:</label>
        <InputNav
          type="number"
          id="price_max"
          value={buscaPriceMax}
          onChange={(e) => {
            setBuscaPriceMax(e.target.value);
          }}
        />
        <label htmlFor="price_max">Valor mínimo:</label>
        <InputNav
          type="number"
          id="price_min"
          value={buscaPriceMin}
          onChange={(e) => {
            setBuscaPriceMin(e.target.value);
          }}
        />
      </NavContainer>
      <div>
        <div>Valor total: R${calcTotal()}</div>
        <div>
          Quantidade de itens:
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </div>

        {cart.map((element, index) => (
          <div key={index}>
            <div>
              {element.index}Nome: {element.name}
            </div>
            <div> -Preço:R$ {element.price}</div>
            <button onClick={() => handleRemove(index)}>
              <div class="material-symbols-outlined">delete</div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Nav;
