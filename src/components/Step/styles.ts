import styled from 'styled-components';

export const Steps = styled.div`
  height: 550px;
  width: 100%;
  max-width: 256px;
  background: #202024;
  border-radius: 5px;

  div {
    display: flex;

    justify-content: space-between;

    align-items: center;
    padding: 24px 32px;
    position: relative;
    border-bottom: 1px solid #323238;
    strong {
      font-size: 10px;
      line-height: 12px;
      background: #323238;
      border-radius: 13px;
      padding: 6px 12px;
      text-transform: uppercase;
      color: #ffffff;
    }
    span {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #41414d;
    }
  }
  main {
    padding: 32px;
    h3 {
      font-size: 28px;
      line-height: 119%;
      font-weight: bold;
      color: #e1e1e6;
    }
    h4 {
      font-weight: 500;
      font-size: 22px;
      line-height: 125%;
      color: #04d361;
      padding: 24px 0;
    }
    p {
      font-size: 16px;
      line-height: 156%;
      color: #a8a8b3;
    }
  }
`;
