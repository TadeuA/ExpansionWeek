import React from 'react';
import Tadeu from '../../assets/tadeu.png';
import { Navbar } from './styles';

const Header: React.FC = () => {
  return (
    <Navbar>
      <div>
        <img src={Tadeu} alt="Tadeu Agostini" />
        <h5> Empatia</h5>
      </div>
    </Navbar>
  );
};
export default Header;
