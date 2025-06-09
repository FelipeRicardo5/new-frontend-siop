import styles from './StepVictim.module.css';
import VictimForm from '../../victim/victimForm';
import MapBox from '../../details/MapBox';
import { useTheme } from '../../../providers/themeContext';

export default function StepVictim({ id }) {

    const { theme } = useTheme();

    const themeVars = theme === "dark"
        ? {
            '--stepContainer-bg': '#1a1a1a',
            '--title-color': '#fff',
            '--header-bg': '#1a1a1a',
            '--body-bg': '#212121',
            '--left-bg': '#2a2a2a',
            '--right-bg': '#2a2a2a',
            '--text-color': '#ccc',
        }
        : {
            '--stepContainer-bg': '#fff',
            '--title-color': '#0A4A81',
            '--header-bg': '#f5f5f5',
            '--body-bg': '#fff',
            '--left-bg': '#fafafa',
            '--right-bg': '#fafafa',
            '--text-color': '#333',
        };

    return (
        <section className={styles.stepContainer} style={themeVars}>
            <header className={styles.header}>
                <h1 className={styles.title}>Informações da Vítima - <strong>Caso <span>{id}</span></strong></h1>
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
