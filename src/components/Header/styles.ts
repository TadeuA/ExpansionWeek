import styled from 'styled-components';
import { shade } from 'polished';

export const Navbar = styled.header`
  padding: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 70px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-width: 90px;
    img {
      border-radius: 100%;
      width: 32px;
      height: 32px;
    }
  }
  a {
    text-decoration: none;
    button {
      border: none;
      outline: none;
      color: #fff;
      background: #8257e6;
      width: 100%;
      min-width: 200px;
      border-radius: 5px;
      padding: 12px 32px;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;

      text-decoration: none;
      cursor: pointer;

      display: flex;

      max-width: 118px;
      transition: background-color 0.2s;

      @media screen and (max-device-width: 995px) {
        font-size: 10px;
        min-width: 150px;
      }
      &:hover {
        background: ${(shade(0.2), '#8257ff')};
      }
    }
  }
`;
