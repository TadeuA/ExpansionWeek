import styled from 'styled-components';

export const Navbar = styled.header`
  padding: 8px;

  display: flex;
  justify-content: flex-start;
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
      margin-right: 15px;
    }
  }
`;
