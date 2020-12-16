import styled from 'styled-components';
import { shade } from 'polished';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: auto;
  right: 0;
  width: 100%;

  height: 300px;

  background: ${({ theme }) => theme.colors['the-shadow']};
  margin-top: 30px;
  @media screen and (max-device-width: 995px) {
    height: 500px;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 60px;
    padding: 32px;
    h2 {
      align-self: flex-start;
      margin-left: 8px;
      margin-right: 8px;
      text-align: center;
    }
    @media screen and (max-device-width: 995px) {
      flex-direction: column;
      justify-content: space-around;
      margin-top: 30px;
      height: 100%;
    }
    a {
      margin-right: 5px;
    }
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  min-height: 175px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div {
      display: inline-block;
    }
  }
  @media screen and (max-device-width: 995px) {
    margin-bottom: 30px;
    align-items: center;
    div {
      align-items: center;
    }
  }
`;
export const Test = styled.a`
  @media screen and (max-device-width: 995px) {
    margin-top: 15px;
  }
  text-decoration: none;
  button {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors['the-light']};
    background: ${({ theme }) => theme.colors['rocketseat-love']};
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
      background: ${(shade(0.2),
      ({ theme }) => theme.colors['rocketseat-cool'])};
    }
  }
`;
export const WhoIM = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-width: 180px;
    margin-bottom: 20px;
    img {
      border-radius: 100%;
      width: 32px;
      height: 32px;
      margin-right: 15px;
    }
    h5 {
      font-size: 16pt;
    }
    a {
      padding: 8px;
      border-radius: 5px;
      background: ${({ theme }) => theme.colors['somber-whistle']};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
