import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import Tadeu from '../../assets/tadeu.png';
import { FooterContainer, WhoIM, Test, LinksContainer } from './styles';

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
        <h2>Vamos construir uma solução juntos?</h2>
        <LinksContainer>
          <Test href="https://s.surveyanyplace.com/int?utm_source=blog&utm_medium=social&utm_campaign=diagnostico-inteligencia-emocional-link-material&utm_term=forca&utm_content=o-que-e-empatia-na-pratica&utm_audience=">
            <button type="button"> Teste sua inteligência emocional</button>
          </Test>
          <div>
            <p>Fontes:</p>
            <div>
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
          </div>
          <div>
            <p>Design inspired from:</p>
            <a href="https://rocketseat.com.br/">Rocketseat</a>
          </div>
        </LinksContainer>
      </section>
    </FooterContainer>
  );
};
export default Footer;
