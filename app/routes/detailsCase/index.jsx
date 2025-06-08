import { useParams } from 'react-router';
import StepperForm from '../../components/common/steps/stepperForm/StepperForm';
import StepCaseInfo from '../../components/common/steps/StepCaseInfo';
import StepEvidences from '../../components/common/steps/StepEvidences';
import StepVictim from '../../components/common/steps/StepVictim';

export default function CaseStepperWrapper() {
  const { id } = useParams();

  const steps = [
    { content: <StepCaseInfo id={id} /> },
    { content: <StepEvidences id={id} /> },
    { content: <StepVictim id={id} /> },
  ];

  const finalReview = (
    <div>
      <h2 className="text-xl font-bold mb-2">Resumo Final</h2>
      <p>Revise as informações antes de finalizar.</p>
    </div>
  );

  const handleSubmit = () => {
    alert('Caso finalizado!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <StepperForm steps={steps} finalReview={finalReview} onSubmit={handleSubmit} />
    </div>
  );
}
