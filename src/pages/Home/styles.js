import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: linear-gradient(145deg, #404347, #070809);
    /* background: #070809; */
    border-radius: 30px;
    box-shadow: 5px 5px 5px #2d2f32, -5px -5px 5px #4b4f53;
    padding: 20px;

    img {
      max-width: 250px;
      align-self: center;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

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
      transition: all 0.2s;

      &:hover {
        background: ${darken(0.05, '#e9520d')};
        box-shadow: inset 3px 3px 3px ${darken(0.05, '#af3e0a')},
          inset -3px -3px 3px ${darken(0.05, '#ff6710')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 18px;
        /* background: #cf4a0c;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        box-shadow: inset 3px 3px 3px #9b3809, inset -3px -3px 3px #ff5d0f; */

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        margin-right: 28px;
        font-weight: bold;
      }
    }
  }
`;
