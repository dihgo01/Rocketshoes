import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import Tenis from '../../assets/img/doninha.jpg'

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={Tenis} alt="Tenis" />
        <strong>Doninha da hora</strong>
        <span>R$ 120,00</span>

        <button type="button">
           <div>
              <MdAddShoppingCart size={16} color="#fff" />3
           </div>
           <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={Tenis} alt="Tenis" />
        <strong>Doninha da hora</strong>
        <span>R$ 120,00</span>

        <button type="button">
           <div>
              <MdAddShoppingCart size={16} color="#fff" />3
           </div>
           <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={Tenis} alt="Tenis" />
        <strong>Doninha da hora</strong>
        <span>R$ 120,00</span>

        <button type="button">
           <div>
              <MdAddShoppingCart size={16} color="#fff" />3
           </div>
           <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={Tenis} alt="Tenis" />
        <strong>Doninha da hora</strong>
        <span>R$ 120,00</span>

        <button type="button">
           <div>
              <MdAddShoppingCart size={16} color="#fff" />3
           </div>
           <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
