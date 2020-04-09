import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Shop" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>

        <MdShoppingCart />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
