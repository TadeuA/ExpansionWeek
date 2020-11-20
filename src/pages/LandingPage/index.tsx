import React, { useState } from 'react';
import Iframe from 'react-iframe';
import {
  Title,
  Intro,
  EmpatyXSympathy,
  Container,
  Main,
  StepsContainer,
  Featured,
  Socrates,
  Center,
  Right,
  Left,
} from './styles';
import Header from '../../components/Header';
import Step from '../../components/Step';
import Footer from '../../components/Footer';

interface StepObject {
  title: string;

  subtitle: string;
  objective: string;
  paragraph: string;
}
const stepsData: StepObject[] = [
  {
    title: 'Observação',

    subtitle: 'Ouça Atentamente',
    objective: 'Seu usuário tem muito a dizer.',
    paragraph:
      'Por mais difícil que seja, não julgue, apenas compreenda o problema.',
  },
  {
    title: 'Sentimento',

    subtitle: 'O óbvio precisa ser dito!',
    objective: 'Defina claramente os sentimentos.',
    paragraph:
      'Pergunte ao usuário os sentimentos envolvidos. Colocar em palavras, verbalizar o que o outro possa estar sentindo.',
  },
  {
    title: 'Necessidade',

    subtitle: 'Busque pela necessidade do usuário',
    objective: 'Descubra do que ele precisa.',
    paragraph:
      '"Por trás de todo sentimento negativo existe uma necessidade não atendida", disse Marshal Rosemberg.',
  },
  {
    title: 'Pedido',

    subtitle: 'Faça um check-in',
    objective: 'Analisar a situação amplamente.',
    paragraph:
      'Considerando o contexto, pergunte se está correto em sua interpretação.',
  },
];
const LandingPage: React.FC = () => {
  const [steps, setSteps] = useState<StepObject[]>(stepsData);
  const mark = '"';
  return (
    <>
      <Header />

      <Title>Empatia, a soft skill mais valiosa para um dev!</Title>
      <Container>
        <Intro>
          <h3>
            Não faça com os outros, aquilo que não gostaria que fizessem com
            você.
          </h3>
          <p>
            Com certeza você já ouviu essa expressão popular, que é bastante
            válido para exemplificar a empatia. Resumidamete, empatia é, sentir
            o que uma pessoa está sentindo, se colocar no lugar dela e ver o
            mundo como ela o enxerga. Trata-se de compreensão emocional! Ser
            empático é sentir a dor de quem está sofrendo, a alegria do outro
            quando está se divertindo. Mesmo que a outra pessoa, não tenha
            nenhuma ligação direta com você.
          </p>
        </Intro>
        <EmpatyXSympathy>
          <h4>Empatia alimenta a conexão, simpatia leva à desconexão”</h4>
          <h4>Brené Brown</h4>
          <Iframe url="https://www.youtube.com/embed/Q6rAV_7J5T0" />
        </EmpatyXSympathy>
      </Container>
      <Featured>
        <div>
          <h2>Cada um tem seu background!</h2>
          <p>
            Que fique claro, não podemos simplesmente ver os problemas e as
            alegrias de alguém com nossos olhos, como se fossem nossos,
            considerando nossa vivência, história de vida e bagagem emocional,
            achando que absorvemos o que o outro está passando. É preciso ir
            além!
          </p>
        </div>
      </Featured>
      <Main>
        <div>
          <h2>Mas afinal, o que um dev tem a ver com isso?</h2>
          <div>
            <p>
              Antes de sair respondendo essa pergunta, pare por um momento e
              experimente se perguntar. Por qual motivo se tornou um dev?
            </p>
            <p>
              Espero que tenha respondido
              <i>
                <strong>para resolver problemas,</strong>
              </i>
              pois é justamente isso que vai fazer durante sua carreira. Não
              existe uma solução sem a existência de um problema.
            </p>
          </div>
        </div>
      </Main>
      <Socrates>
        <div>
          <Center>
            {mark}
            Conheça-te a ti mesmo e conhecerás o universo e os deuses
            {mark}
          </Center>
          <p>Sócrates</p>
        </div>
        <Left>
          O inicio da jornada da empatia começa, com o ato, de nos reconhecermos
          e aceitarmos nossas virtudes e defeitos. Só assim teremos uma evolução
          plena.
        </Left>

        <Right>
          Compreendendo profundamente sues colegas de trabalho, pode gerar um
          laço muito forte, e tornar o ambiente mais harmónico.
        </Right>
      </Socrates>
      <Main>
        <div>
          <h2>É através dessa soft skill que poderá desenvolver as demais.</h2>
          <div>
            <p>Com ela suas aplicações terão mais valor.</p>
            <p>
              Ao sentir a necessidade dos usuários, surge a oportunidade de
              criar uma solução verdadeira. Existem alguns passos recomendados
              que estimulam o desenvolvimento de outras soft skills e torna o
              objetivo da solução mais claro.
            </p>
          </div>
        </div>
      </Main>
      <StepsContainer>
        {steps.map((step, index) => {
          const position = index + 1;
          return (
            <Step
              key={String(step)}
              title={step.title}
              index={position}
              subtitle={step.subtitle}
              objective={step.objective}
              paragraph={step.paragraph}
            />
          );
        })}
      </StepsContainer>
      <Featured>
        <div>
          <h2>Recrutadores vão lhe perseguir que nem loucos.</h2>
          <p>
            Tornando isso um hábito, aprimorará constantemente diversas sofs
            skill, se destacando na carreira. Por fim se tornará um proficional
            cada vez melhor com hard skills e soft skills bem desenvolvidas,
            alinhas e balanceadas. Com capacidade de se tornar um excelente
            mentor ou líder.
          </p>
        </div>
      </Featured>
      <Footer />
    </>
  );
};

export default LandingPage;
