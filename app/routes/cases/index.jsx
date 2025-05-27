import Header from "../../components/layouts/header";
import Sidebar from "../../components/layouts/sidebar";
import ProfileAvatar from "../../components/layouts/profileAvatar";
import { Trash } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../../providers/themeContext";
import styles from "./cases.module.css";
import Loading  from "../../../public/tube-spinner.svg";

export default function CasesList() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('https://backend-siop.onrender.com/api/cases');
        const data = await response.json();
        setCases(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar casos:', error);
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  // Theme variables for CSS
  const themeVars = theme === "dark"
    ? {
        '--cases-title-color': '#fff',
        '--cases-bg': '#212121',
        '--case-card-bg': '#212121',
        '--case-title-color': '#fff',
        '--case-address-color': '#90cdf4',
        '--case-desc-color': '#e0e0e0',
        '--case-link-color': '#90cdf4',
        '--case-card-border': '#3d3d3d',
      }
    : {
        '--cases-title-color': '#0A4A81',
        '--cases-bg': '#fff',
        '--case-card-bg': '#fff',
        '--case-title-color': '#0A4A81',
        '--case-address-color': '#0A4A81',
        '--case-desc-color': '#666',
        '--case-link-color': '#0A4A81',
        '--case-card-border': '#ccc',
      };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'aberto':
        return '#22c55e';
      case 'fechado':
        return '#dc2626';
      case 'em análise':
        return '#0A4A81';
      default:
        return '#0A4A81';
    }
  };


  return (
    <div className={styles.casesContainer} style={themeVars}>
      <h1 className={styles.casesTitle}>Casos em andamento</h1>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div> <img src={Loading} alt="Loading" width={50} height={50} /> </div>
          <div className={styles.loadingText}>Carregando...</div>
        </div>
      ) : (
        <>
      {cases.map((c) => (
        <div key={c._id} className={styles.caseCard}>
          <div className={styles.cardAvatar}>
            <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50)}.jpg`} alt={c.titulo} />
          </div>
          <div className={styles.cardContent}>
            <div>
              <h3 className={styles.cardName}>{c.titulo}</h3>
              <div className={styles.cardDate}>{c.createdAt}</div>
              <div className={styles.cardAddress}>{c.localizacao}</div>
              <div className={styles.cardDescription}>{c.descricao}</div>
              <div className={styles.cardResponsible}><b>Responsável:</b> {c.responsavel.nome}</div>
              <div className={styles.cardInstitution}><b>Instituição:</b> {c.instituicao}</div>
            </div>
            <div className={styles.cardActions}>
              <button className="hover:text-red-300 text-gray-500 duration-400 transition-colors">
                <Trash size={20} />
              </button>
            </div>
          </div>
          <div className={styles.cardSide}>
            <span
              className={styles.statusBadge}
              style={{ background: getStatusColor(c.status) }}
            >
              {c.status}
            </span>
            <a href="#" className={styles.detailsLink}>
              Ver detalhes...
            </a>
          </div>
        </div>
      ))}
      </>
      )}
    </div>
  );
}
