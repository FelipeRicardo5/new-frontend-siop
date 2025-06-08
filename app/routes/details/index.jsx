import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import styles from './details.module.css';
import CaseInfoForm from '../../components/details/CaseInfoForm';
import DescriptionBox from '../../components/details/DescriptionBox';
import MapBox from '../../components/details/MapBox'; // Mapa aqui
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function DetailsCases() {
  const { id } = useParams();
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await fetch(`https://backend-siop.onrender.com/api/cases/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar detalhes do caso');
        }
        const data = await response.json();
        setData(data);
        console.log('Detalhes do caso:', data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchCaseDetails();
  }
    , [id]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Detalhes do caso, <span>{data.titulo}</span></h1>
        <button className={styles.button}>Gerar Relatório</button>
      </header>

      <nav className={styles.tabs}>
        <Link to='/details' className={styles.active}>1 Informações Básicas</Link>
        {/* <Link to={`/detalhes/${id}/evidencias`} className={styles.active}>2 Evidências</Link> */}
        <Link to="/evidence" className={styles.active}>2 Evidências</Link>
        <Link to={"/victim"} className={styles.active}>3 Vítimas</Link>
      </nav>

      <section className={styles.body}>
        <div className={styles.left}>
          <CaseInfoForm
            titulo={data.titulo}
            responsavel={data.responsavel}
            localizacao={data.localizacao}
            status={data.status}
            instituicao={data.instituicao}
            dataCriacao={data.createdAt}
          />
          <Link to="/dashboard" className={styles.ArrowLeft}>
            <ArrowLeft size={20} strokeWidth={2} />
          </Link>
        </div>
        <div className={styles.right}>
          <DescriptionBox
            descricao={data.descricao}
          />
          <MapBox
            latitude={-8.042236}
            longitude={-34.879536}
            zoom={16}
            popupText="Av. Dr. Jayme da Fonte, Recife - PE"
          />

          <Link to={`/detailsevidences/${id}`} className={styles.ArrowRight}>
            <ArrowRight size={20} strokeWidth={2} />
          </Link>
        </div>
      </section>


    </main>
  );
}
