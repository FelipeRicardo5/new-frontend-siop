import { useParams } from 'react-router';
import styles from './StepEvidences.module.css';
import { FileText } from 'lucide-react';
import { useTheme } from '../../../providers/themeContext';

export default function StepEvidences({ id: caseId }) {
    const evidencias = [
        { id: 1, tipo: 'Documento', descricao: 'Vítima Presumida' },
        { id: 2, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
        { id: 3, tipo: 'Documento', descricao: 'Vítima Presumida' },
        { id: 4, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
        { id: 5, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
        { id: 6, tipo: 'Documento', descricao: 'Vítima Presumida' },
    ];
    const { theme } = useTheme();

    const themeVars = theme === "dark"
        ? {
            '--body-bg': '#212121',
            '--stepContainer-bg': '#1a1a1a',
            '--title-bg': '#fff',
            '--header-bg': '#1a1a1a',
            '--button-bg': '#1a1a1a',
            '--content-bg': '#212121',
            '--lista-bg': '#1a1a1a',
            '--item-bg': '#1a1a1a',
            '--trash-bg': '#1a1a1a',
            '--item-border': '#212121',
        }
        : {
            '--body-bg': '#fff',
            '--stepContainer-bg': '#fff',
            '--title-bg': '#0A4A81',
            '--header-bg': '#1a1a1a',   
            '--button-bg': '#1a1a1a',
            '--content-bg': '#fff',
            '--lista-bg': '#1a1a1a',
            '--item-bg': '#fff',
            '--trash-bg': '#1a1a1a',
            '--item-border': '#ccc',
        };

    return (
        <section className={styles.stepContainer} style={themeVars}>
            <h2 className={styles.title}>Evidências do <strong>Caso <span>{caseId}</span></strong></h2>
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
