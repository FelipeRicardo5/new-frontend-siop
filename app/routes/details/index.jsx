// src/pages/DetailsCases.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import styles from './details.module.css';
import CaseInfoForm from '../../components/details/CaseInfoForm';
import DescriptionBox from '../../components/details/DescriptionBox';
import MapBox from '../../components/details/MapBox'; // Mapa aqui
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Caso queira buscar os detalhes pelo ID do caso, você pode utilizar o useEffect e useState
// const [caso, setCaso] = useState(null);
// const { id } = useParams();

// useEffect(() => {
//   // Busque os dados do caso pelo id
//   // fetch(`/api/casos/${id}`)
//   //   .then((res) => res.json())
//   //   .then((data) => setCaso(data));
// }, [id]);

export default function DetailsCases() {
  const { id } = useParams();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Detalhes do caso, Marília Mendonça<span>{id}</span></h1>
        <button className={styles.button}>Gerar Relatório</button>
      </header>

      <nav className={styles.tabs}>    
          <Link to='/details' className={styles.active}>1 Informações Básicas</Link>
        {/* <Link to={`/detalhes/${id}/evidencias`} className={styles.active}>2 Evidências</Link> */}
         <Link to="/evidence"className={styles.active}>2 Evidências</Link> 
        <Link to={"/victim"} className={styles.active}>3 Vítimas</Link>
      </nav>

      <section className={styles.body}>
        <div className={styles.left}>
          <CaseInfoForm />
           <Link to="/dashboard" className={styles.ArrowLeft}>
               <ArrowLeft size={20} strokeWidth={2} />
             </Link>
        </div>
        <div className={styles.right}>
          <DescriptionBox />
          <MapBox />
     <Link to="/details-evidence" className={styles.ArrowRight}>
         <ArrowRight size={20} strokeWidth={2} />
       </Link>
        </div>
      </section>

     
    </main>
  );
}
