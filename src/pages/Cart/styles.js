import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: linear-gradient(145deg, #404347, #070809);
  border-radius: 30px;
  box-shadow: 5px 5px 5px #2d2f32, -5px -5px 5px #4b4f53;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      background: #e9520d;
      color: #fff;
      border: 0;
      border-radius: 20px;
      box-shadow: inset 3px 3px 3px #af3e0a, inset -3px -3px 3px #ff6710;
      overflow: hidden;
      margin-top: auto;
      padding: 12px 20px;
      transition: all 0.2s;
      text-transform: uppercase;
      font-weight: bold;

      &:hover {
        background: ${darken(0.05, '#e9520d')};
        box-shadow: inset 3px 3px 3px ${darken(0.05, '#af3e0a')},
          inset -3px -3px 3px ${darken(0.05, '#ff6710')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #d3d3d3;
  }

  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }

  strong {
    display: block;
    color: white;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  div {
    display: flex;
    align-items: center;

    input {
      background: #3c3f42;
      border: none;
      border-radius: 4px;
      box-shadow: inset 3px 3px 3px #333638, inset -3px -3px 3px #45484c;
      padding: 6px;
      width: 50px;
      margin: 0 6px;
      text-align: center;
      color: white;
    }
  }

  button {
    width: 30px;
    height: 30px;
    background: #e9520d;
    border: 0;
    padding: 6px;
    border-radius: 50%;
    box-shadow: inset 3px 3px 3px #af3e0a, inset -3px -3px 3px #ff6710;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      background: ${darken(0.05, '#e9520d')};
      box-shadow: inset 3px 3px 3px ${darken(0.05, '#af3e0a')},
        inset -3px -3px 3px ${darken(0.05, '#ff6710')};
    }

    svg {
      fill: white;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
    color: white;
  }
`;
