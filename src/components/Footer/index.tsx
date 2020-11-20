import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import Tadeu from '../../assets/tadeu.png';
import { FooterContainer, WhoIM } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <section>
        <WhoIM>
          <div>
            <img src={Tadeu} alt="Tadeu Agostini" />
            <h5> Tadeu Agostini</h5>
          </div>
          <div>
            <a href="https://github.com/TadeuA">
              <AiFillGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/tadeuagostini/">
              <AiFillLinkedin size={22} />
            </a>
            <a href="https://www.instagram.com/dev.tadeu/">
              <AiFillInstagram size={22} />
            </a>
          </div>
        </WhoIM>
        <div>
          <h2>Vamos construir uma solução juntos?</h2>
          <div>
            <p>Fontes</p>
            <a href="https://www.ibccoaching.com.br/portal/conheca-o-poder-da-empatia/">
              1
            </a>
            <a href="https://www.ibccoaching.com.br/portal/conheca-o-poder-da-empatia/">
              2
            </a>
            <a href="https://www.ibccoaching.com.br/portal/conheca-o-poder-da-empatia/">
              3
            </a>
            <a href="https://fernandogomes.blogosfera.uol.com.br/2020/05/15/como-a-neurociencia-explica-a-empatia-saiba-como-ela-e-ativada-no-cerebro/">
              4
            </a>
          </div>
          <p>Design inspired from:</p>
          <a href="https://rocketseat.com.br/">Rocketseat</a>
        </div>
      </section>
    </FooterContainer>
  );
};
export default Footer;
