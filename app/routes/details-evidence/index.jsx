import { useParams, Link } from 'react-router';
import styles from './Evidencias.module.css';
import { FileText } from 'lucide-react';
import Sidebar from '../../components/layouts/sidebar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Evidencias() {
  const evidencias = [
    { id: 1, tipo: 'Documento', descricao: 'Vítima Presumida' },
    { id: 2, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
    { id: 3, tipo: 'Documento', descricao: 'Vítima Presumida' },
    { id: 4, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
    { id: 5, tipo: 'Fotografia', descricao: 'Vítima Presumida' },
    { id: 6, tipo: 'Documento', descricao: 'Vítima Presumida' },
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
  <h2 className={styles.title}>Detalhes do caso,<br /><span>Marília Mendonça</span></h2>
      <main className={styles.main}>
        <header className={styles.header}>
        
          <div className={styles.tabs}>
             <Link to='/details' className={styles.active}>1 Informações Básicas</Link>
           <Link to="/evidence"className={styles.active}>2 Evidências</Link> 
             <Link to="/victim"className={styles.active}>3 Vitimas</Link> 
          </div>
          <button className={styles.button}>Adicionar Evidência</button>
        </header>

        <section className={styles.content}>
          <h3>Visualizar <strong>Evidências</strong></h3>
          <div className={styles.lista}>
            {evidencias.map(ev => (
              <div key={ev.id} className={styles.item}>
                <FileText size={18} className={styles.trash} />
                <span><strong>{ev.tipo}:</strong> {ev.descricao}</span>
                
              </div>
              
            ))}
              <div className={styles.navButtons}>
        <Link to="/details" className={styles.ArrowLeft}>
     <ArrowLeft size={20} strokeWidth={2} />
   </Link>
   <Link to="/victim" className={styles.ArrowRight}>
     <ArrowRight size={20} strokeWidth={2} />
   </Link>
  </div>
          </div>


        
        </section>
      </main>
    </div>
  );
}
