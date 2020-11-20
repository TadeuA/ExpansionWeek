import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: auto;
  right: 0;
  width: 100%;

  height: 300px;
  background: #000;
  margin-top: 30px;
  @media screen and (max-device-width: 995px) {
    height: 500px;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 100px;
    padding: 32px;
    @media screen and (max-device-width: 995px) {
      flex-direction: column;
      justify-content: space-around;
      margin-top: 30px;
      height: 100%;
      div {
        margin-bottom: 30px;
      }
    }
    a {
      margin-right: 5px;
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
    }
    h5 {
      font-size: 16pt;
    }
    a {
      padding: 8px;
      border-radius: 5px;
      background: #202024;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
