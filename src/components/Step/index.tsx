import React from 'react';
import { Steps } from './styles';

interface StepObject {
  title: string;
  index: number;
  subtitle: string;
  objective: string;
  paragraph: string;
}
const Step: React.FC<StepObject> = ({
  title,
  index,
  subtitle,
  objective,
  paragraph,
}: StepObject) => {
  return (
    <Steps>
      <div>
        <strong>{title}</strong>
        <span>{index}</span>
      </div>
      <main>
        <h3>{subtitle}</h3>
        <h4>{objective}</h4>
        <p>{paragraph}</p>
      </main>
    </Steps>
  );
};
export default Step;
