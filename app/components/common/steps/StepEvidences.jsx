import { useParams } from 'react-router';
import styles from './StepEvidences.module.css';
import { FileText } from 'lucide-react';

export default function StepEvidences({ id: caseId }) {
  const evidencias = [
    { id: 1, tipo: 'Documento', descricao: 'Vítima Presumida' },
    { id: 2, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
    { id: 3, tipo: 'Documento', descricao: 'Vítima Presumida' },
    { id: 4, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
    { id: 5, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
    { id: 6, tipo: 'Documento', descricao: 'Vítima Presumida' },
  ];

  return (
    <section className={styles.stepContainer}>
      <h2 className={styles.title}>Evidências do Caso <span>{caseId}</span></h2>
      <div className={styles.header}>
        <button className={styles.button}>Adicionar Evidência</button>
      </div>

      <div className={styles.content}>
        <h3>Visualizar <strong>Evidências</strong></h3>
        <div className={styles.lista}>
          {evidencias.map(ev => (
            <div key={ev.id} className={styles.item}>
              <FileText size={18} className={styles.trash} />
              <span><strong>{ev.tipo}:</strong> {ev.descricao}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
