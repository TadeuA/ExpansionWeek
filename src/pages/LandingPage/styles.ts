import styled from 'styled-components';
import { ImageComponents } from './interface';

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 64px;
  line-height: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors['ice-light']};
  font-family: ${({ theme }) => theme.fonts['text-regular']};
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
    font-family: ${({ theme }) => theme.fonts['text-regular']};
    font-size: 18pt;
    line-height: 107%;
    color: ${({ theme }) => theme.colors['ice-light']};
    font-weight: 500;
    padding: 40px 0 24px 0;
    width: 100%;
    @media screen and (max-device-width: 995px) {
      font-size: 16pt;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts['text-regular']};
    font-size: 14pt;
    line-height: 167%;
    color: ${({ theme }) => theme.colors['dark-light']};
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
  @media screen and (max-device-width: 365px) {
    align-items: center;
  }
  h4 {
    font-family: ${({ theme }) => theme.fonts['text-regular']};
    align-self: flex-end;
    font-size: 16pt;
    @media screen and (max-device-width: 995px) {
      margin-top: 14pt;
    }
    @media screen and (max-device-width: 365px) {
      margin-top: 10pt;
      text-align: center;
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
    @media screen and (max-device-width: 365px) {
      width: 248px;
      height: 139px;
    }
  }
`;

export const Main = styled.main`
  background: ${({ theme }) => theme.colors['somber-whistle']};
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
      font-family: ${({ theme }) => theme.fonts['text-regular']};
      font-weight: 700;
      font-size: 54px;
      line-height: 56px;
      width: 100%;
      color: ${({ theme }) => theme.colors['ice-light']};
      margin-bottom: 20px;
      @media screen and (max-device-width: 995px) {
        font-size: 22pt;
      }
      p {
        font-family: ${({ theme }) => theme.fonts['text-regular']};

        @media screen and (max-device-width: 995px) {
          font-size: 12pt;
        }
      }
    }
    div {
      display: flex;
      flex-direction: column;
      p {
        font-family: ${({ theme }) => theme.fonts['text-regular']};

        font-size: 14pt;
        line-height: 156%;
        color: ${({ theme }) => theme.colors['dark-light']};
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
          font-family: ${({ theme }) => theme.fonts['text-regular']};

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
      font-family: ${({ theme }) => theme.fonts['text-regular']};

      font-size: 54px;
      line-height: 58px;
      text-align: center;
      font-weight: 700;
      color: ${({ theme }) => theme.colors['ice-light']};
      padding-top: 40px;
      @media screen and (max-device-width: 995px) {
        font-size: 22pt;
      }
    }
    p {
      font-family: ${({ theme }) => theme.fonts['text-regular']};

      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: ${({ theme }) => theme.colors['dark-light']};
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
export const Socrates = styled.div<ImageComponents>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url(${({ image }) => image}) no-repeat 60%;
`;

export const Center = styled.h2`
  font-size: 54px;
  line-height: 58px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts['text-mono']};

  font-weight: 700;
  color: ${({ theme }) => theme.colors['ice-light']};
  padding-top: 40px;
  align-self: center;
  @media screen and (max-device-width: 995px) {
    font-size: 22pt;
  }
`;

export const Left = styled.p`
  font-family: ${({ theme }) => theme.fonts['text-regular']};

  font-size: 18px;
  line-height: 28px;
  text-align: left;
  color: ${({ theme }) => theme.colors['dark-light']};
  padding-top: 24px;
  width: 100%;
  max-width: 510px;
  align-self: flex-start;
  max-width: 300px;
  padding: 32px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors['the-shadow']};
  @media screen and (max-device-width: 995px) {
    margin-top: 20px;
    font-size: 12pt;
  }
`;
export const Right = styled.p`
  font-family: ${({ theme }) => theme.fonts['text-regular']};

  font-size: 18px;
  line-height: 28px;
  text-align: right;
  color: ${({ theme }) => theme.colors['ice-light']};
  padding-top: 24px;
  width: 100%;
  max-width: 510px;
  align-self: flex-end;
  max-width: 300px;
  padding: 32px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors['the-shadow']};
  @media screen and (max-device-width: 995px) {
    margin-top: 20px;
    font-size: 12pt;
  }
`;
