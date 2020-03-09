import React from 'react';

import { ProductList } from './styles';
import Tenis from '../../assets/img/doninha.jpg'

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={Tenis} alt="Tenis" />
      </li>
    </ProductList>
  );
}
