import styles from './StepVictim.module.css'; 
import VictimForm from '../../victim/victimForm';
import MapBox from '../../details/MapBox';

export default function StepVictim({ id }) {
  return (
    <section className={styles.stepContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Informações da Vítima - Caso <span>{id}</span></h1>
      </header>

      <div className={styles.body}>
        <div className={styles.left}>
          <VictimForm />

          <div className={styles.mapa}>
            <MapBox />
          </div>
        </div>

        <div className={styles.right}>
          <img src="/body-diagram.png" alt="Diagrama Corporal" className={styles.cardImageBody} />
          <img src="/tooth-diagram.png" alt="Diagrama Dentário" className={styles.cardImageTooth} />
        </div>
      </div>
    </section>
  );
}
