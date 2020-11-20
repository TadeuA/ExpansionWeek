import styled from 'styled-components';
import socrates from '../../assets/socrates.jpg';

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 64px;
  line-height: 1;
  text-align: center;
  color: #e1e1e6;
  font-weight: 700;
  width: 100%;
  max-width: 615px;
  margin: 0 auto;
  @media screen and (max-device-width: 995px) {
    font-size: 20pt;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media screen and (max-device-width: 995px) {
    margin-top: 22px;
    flex-direction: column;
  }
`;

export const Intro = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  h3 {
    font-size: 18pt;
    line-height: 107%;
    color: #e1e1e6;
    font-weight: 700;
    padding: 40px 0 24px 0;
    width: 100%;
    @media screen and (max-device-width: 995px) {
      font-size: 16pt;
    }
  }

  p {
    font-size: 14pt;
    line-height: 167%;
    color: #a8a8b3;
    @media screen and (max-device-width: 995px) {
      font-size: 12pt;
    }
  }
`;
export const EmpatyXSympathy = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;

  max-width: 600px;
  align-items: flex-end;

  h4 {
    align-self: flex-end;
    font-size: 16pt;
    @media screen and (max-device-width: 995px) {
      margin-top: 14pt;
    }
  }
  Iframe {
    width: 592px;
    height: 332px;
    display: block;
    position: relative;
    @media screen and (max-device-width: 600px) {
      width: 355px;
      height: 199px;
    }
  }
`;

export const Main = styled.main`
  background: #202024;
  width: 100%;
  border-radius: 5px;
  padding: 80px;
  margin-top: 30px;
  max-width: 1120px;
  @media screen and (max-device-width: 995px) {
    padding: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    min-width: 100%;

    h2 {
      font-size: 54px;
      line-height: 56px;
      width: 100%;
      color: #e1e1e6;
      margin-bottom: 20px;
      @media screen and (max-device-width: 995px) {
        font-size: 22pt;
      }
      p {
        @media screen and (max-device-width: 995px) {
          font-size: 12pt;
        }
      }
    }
    div {
      display: flex;
      flex-direction: column;
      p {
        font-size: 14pt;
        line-height: 156%;
        color: #a8a8b3;
        width: 100%;
        i {
          margin-right: 4px;
          margin-left: 4px;
        }
      }
      div {
        display: flex;
        flex-direction: column;
        p {
          margin-top: 0;
        }
      }
    }
  }
`;
export const StepsContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 32px;
  display: flex;
  justify-items: center;

  align-items: center;
  @media screen and (max-device-width: 995px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Featured = styled.section`
  padding-top: 50px;
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    h2 {
      font-size: 54px;
      line-height: 58px;
      text-align: center;
      font-weight: bold;
      color: #e1e1e6;
      padding-top: 40px;
      @media screen and (max-device-width: 995px) {
        font-size: 22pt;
      }
    }
    p {
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: #a8a8b3;
      padding-top: 24px;
      width: 100%;
      max-width: 710px;
      margin: 0 auto;
      @media screen and (max-device-width: 995px) {
        font-size: 12pt;
      }
    }
  }
`;
export const Socrates = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url(${socrates}) content;
`;

export const Center = styled.h2`
  font-size: 54px;
  line-height: 58px;
  text-align: center;
  font-weight: bold;
  color: #e1e1e6;
  padding-top: 40px;
  align-self: center;
  @media screen and (max-device-width: 995px) {
    font-size: 22pt;
  }
`;

export const Left = styled.p`
  font-size: 18px;
  line-height: 28px;
  text-align: left;
  color: #a8a8b3;
  padding-top: 24px;
  width: 100%;
  max-width: 510px;
  align-self: flex-start;
  max-width: 300px;
  padding: 32px;
  border-radius: 20px;
  background: #000;
  @media screen and (max-device-width: 995px) {
    margin-top: 20px;
    font-size: 12pt;
  }
`;
export const Right = styled.p`
  font-size: 18px;
  line-height: 28px;
  text-align: right;
  color: #a8a8b3;
  padding-top: 24px;
  width: 100%;
  max-width: 510px;
  align-self: flex-end;
  max-width: 300px;
  padding: 32px;
  border-radius: 20px;
  background: #000;
  @media screen and (max-device-width: 995px) {
    margin-top: 20px;
    font-size: 12pt;
  }
`;
