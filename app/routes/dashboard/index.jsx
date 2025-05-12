import styles from './dashboard.module.css';
import { useTheme } from '../../providers/themeContext';
import Pie from '../../components/charts/chartPie.jsx'

export default function DashBoard() {
    const { theme } = useTheme()

    const data = {
        "name": "Casos Cadastrados",
        "quantidade": "24"
    }

    return (
        <div className={`flex flex-col items-start`}>
            <h1 className={`${theme === 'dark' ? '' : 'text-[#0A4A81]'} sm:text-[2rem] text-[1.5rem] font-semibold mb-[1.5rem]`} >Dashboard</h1>
            <div className={`${theme === 'dark' ? 'bg-[#212121]' : 'text-[#0A4A81] bg-white'} flex flex-col items-center h-[100dvh] min-w-[80dvw] px-[1rem] py-[2rem] border-1 border-[#ccc] rounded-[20px] shadow-2xl/30`}>
                <section className={styles.dashboard_section}>
                    <div className={styles.dashboard_card}>
                        <p>{data.name}</p>
                        <h3>{data.quantidade}</h3>
                    </div>
                    <div className={styles.dashboard_card}>
                        <p>{data.name}</p>
                        <h3>{data.quantidade}</h3>
                    </div>
                    <div className={styles.dashboard_card}>
                        <p>{data.name}</p>
                        <h3>{data.quantidade}</h3>
                    </div>
                </section>
                <section className={styles.dashboard_section}>
                    <div className={styles.dashboard}>
                        <Pie />
                    </div>
                    <div className={styles.dashboard}>
                        <Pie />
                    </div>
                    <div className={styles.dashboard}>
                        <Pie />
                    </div>
                </section>
                <section className={styles.dashboard_section}>
                    <div className={styles.dashboard}>
                        <Pie />
                    </div>
                    <div className={styles.dashboard}>
                        <Pie />
                    </div>
                </section>
            </div>
        </div>
    );
}