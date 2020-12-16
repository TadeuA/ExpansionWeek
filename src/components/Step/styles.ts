import styled from 'styled-components';

export const Steps = styled.div`
  height: 550px;
  width: 100%;
  max-width: 256px;
  background: ${({ theme }) => theme.colors['somber-whistle']};
  border-radius: 5px;
  @media screen and (max-device-width: 995px) {
    height: 100%;
  }

  div {
    display: flex;

    justify-content: space-between;

    align-items: center;
    padding: 24px 32px;
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors['somber-music']};
    strong {
      font-family: ${({ theme }) => theme.fonts['text-regular']};

      font-size: 10px;
      line-height: 12px;
      background: ${({ theme }) => theme.colors['somber-music']};
      border-radius: 13px;
      padding: 6px 12px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['the-light']};
    }
    span {
      font-family: ${({ theme }) => theme.fonts['text-regular']};

      font-weight: bold;
      font-size: 12px;
      line-height: 19px;
      color: ${({ theme }) => theme.colors['somber-whisper']};
    }
  }
  main {
    padding: 32px;
    h3 {
      font-family: ${({ theme }) => theme.fonts['text-regular']};

      font-size: 22px;
      line-height: 119%;
      font-weight: 700;
      color: ${({ theme }) => theme.colors['ice-light']};
    }
    h4 {
      font-family: ${({ theme }) => theme.fonts['text-regular']};

      font-weight: 500;
      font-size: 18px;
      line-height: 125%;
      color: ${({ theme }) => theme.colors['happy-success']};
      padding: 24px 0;
    }
    p {
      font-family: ${({ theme }) => theme.fonts['text-regular']};

      font-size: 14px;
      line-height: 156%;
      color: ${({ theme }) => theme.colors['dark-light']};
    }
  }
`;
