import { useParams } from 'react-router';
import StepperForm from '../../components/common/steps/stepperForm/StepperForm';
import StepCaseInfo from '../../components/common/steps/StepCaseInfo';
import StepEvidences from '../../components/common/steps/StepEvidences';
import StepVictim from '../../components/common/steps/StepVictim';
import { useNavigate } from 'react-router';

export default function CaseStepperWrapper() {
  const id = localStorage.getItem('userId');
  const navigate = useNavigate();

  const steps = [
    { content: <StepCaseInfo id={id} /> },
    { content: <StepEvidences id={id} /> },
    { content: <StepVictim id={id} /> },
  ];

  const finalReview = (
    <div>
      <h2 className="text-xl font-bold mb-2">Documentação finalizada</h2>
      <p>Revise as informações antes de finalizar.</p>
    </div>
  );

  const handleSubmit = () => {
    navigate(`/cases/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <StepperForm steps={steps} finalReview={finalReview} onSubmit={handleSubmit} />
    </div>
  );
}
