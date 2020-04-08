import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  /* border-radius: 5px; */
  /* box-shadow: 5px 5px 5px #27292b, -5px -5px 5px #515559; */
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
      color: #bababa;
    }
  }

  svg {
    height: 32px;
    width: 32px;
  }
`;
