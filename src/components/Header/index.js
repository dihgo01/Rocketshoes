import React from 'react';
import { Link } from 'react-router-dom';

 import { Container, Cart } from './styles';
 import { MdShoppingBasket } from 'react-icons/md'
 import logo from '../../assets/img/logo.svg'

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt="Rockeshoes"/>
      </Link>
      <Cart to='/cart'>
          <div>
            <strong> Meu Carinho</strong>
            <span> 3 itens</span>
            <MdShoppingBasket size={36} color="#FFF"/>
          </div>
      </Cart>
    </Container>
  );
}
