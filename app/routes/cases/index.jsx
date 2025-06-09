import { Trash } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../../providers/themeContext";
import styles from "./cases.module.css";
import Loading from "../../../public/tube-spinner.svg";
import Search from "../../components/form/search";
import { useMemo } from "react";
import noPicture from "../../../public/nopicture.png";
import { Link } from "react-router";


export default function CasesList() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");


  const id = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const url =
          role === "perito"
            ? `https://backend-siop.onrender.com/api/cases/user/${id}`
            : `https://backend-siop.onrender.com/api/cases`;

        const response = await fetch(url);
        const data = await response.json();

        setCases(data);
      } catch (error) {
        console.error('Erro ao buscar casos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, [id, role]);


  const filteredCases = useMemo(() => {
    const search = searchTerm.toLowerCase();
    return cases.filter((c) => {
      const matchSearch =
        (c.titulo ?? "").toLowerCase().includes(search) ||
        (c.descricao ?? "").toLowerCase().includes(search) ||
        (c.status ?? "").toLowerCase().includes(search) ||
        (c.localizacao ?? "").toLowerCase().includes(search) ||
        (c.instituicao ?? "").toLowerCase().includes(search);

      const matchStatus =
        statusFilter === "" ||
        (c.status ?? "").toLowerCase() === statusFilter.toLowerCase();

      return matchSearch && matchStatus;
    });
  }, [cases, searchTerm, statusFilter]);



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
      '--filter-label-color': '#fff',
      '--filter-border-color': '#555',
      '--filter-text-color': '#e0e0e0',
      '--filter-bg-color': '#212121',
      '--filter-hover-border-color': '#90cdf4',
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
      '--filter-label-color': '#0A4A81',
      '--filter-border-color': '#ccc',
      '--filter-text-color': '#333',
      '--filter-bg-color': '#fff',
      '--filter-hover-border-color': '#0A4A81',
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
          <div className={styles.searchContainer}>
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
          <div className={styles.filterContainer}>
            <label className={styles.filterLabel}>Filtrar por:</label>
            <select
              className={styles.filterSelect}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Aberto">Aberto</option>
              <option value="Fechado">Fechado</option>
              <option value="Em Análise">Em Análise</option>
            </select>
          </div>


          {filteredCases.map((c) => (
            <div key={c._id} className={styles.caseCard}>
              <div className={styles.cardAvatar}>
                <img
                  src={c.caseImageUrl || noPicture}
                  alt={c.titulo}
                />
              </div>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardName}>{c.titulo}</h3>
                  <div className={styles.cardDate}>{c.createdAt}</div>
                  <div className={styles.cardAddress}>{c.localizacao}</div>
                  <div className={styles.cardDescription}>{c.descricao}</div>
                  {c.responsavel?.nome &&
                    <div className={styles.cardResponsible}><b>Responsável:</b> {c.responsavel.nome}</div>
                  }
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
                <Link
                to={`/detailsCase/${c._id}`}
                >
                  <a href="#" className={styles.detailsLink}>
                    Ver detalhes...
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
