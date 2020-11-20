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

      <a href="https://s.surveyanyplace.com/int?utm_source=blog&utm_medium=social&utm_campaign=diagnostico-inteligencia-emocional-link-material&utm_term=forca&utm_content=o-que-e-empatia-na-pratica&utm_audience=">
        <button type="button"> Teste sua inteligência emocional</button>
      </a>
    </Navbar>
  );
};
export default Header;
