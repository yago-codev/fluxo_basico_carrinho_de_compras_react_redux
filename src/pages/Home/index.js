import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://imageswscdn.wslojas.com.br/files/20717/MED_nike-kyrie-5-patrick-175972.png"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://imageswscdn.wslojas.com.br/files/20717/MED_nike-kyrie-5-patrick-175972.png"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://imageswscdn.wslojas.com.br/files/20717/MED_nike-kyrie-5-patrick-175972.png"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://imageswscdn.wslojas.com.br/files/20717/MED_nike-kyrie-5-patrick-175972.png"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://imageswscdn.wslojas.com.br/files/20717/MED_nike-kyrie-5-patrick-175972.png"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://imageswscdn.wslojas.com.br/files/20717/MED_nike-kyrie-5-patrick-175972.png"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
