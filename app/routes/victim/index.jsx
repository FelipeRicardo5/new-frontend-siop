// src/pages/DetailsCases.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import styles from './victim.module.css';
import VictimForm from '../../components/victim/victimForm';
import MapBox from '../../components/details/MapBox'; // Mapa aqui
import { ArrowLeft, ArrowRight } from 'lucide-react';


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
        <Link to="/evidence" className={styles.active}>2 Evidências</Link>
        <Link to={"/victim"} className={styles.active}>3 Vítimas</Link>
      </nav>

      <section className={styles.body}>
        <div className={styles.left}>
          <VictimForm />

          <div className={styles.mapa}>
            <MapBox />
          </div>

          <Link to="/details-evidence" className={styles.ArrowLeft}>
            <ArrowLeft size={20} strokeWidth={2} />
          </Link>
        </div>

        <div className={styles.right}>
          <img src="/body-diagram.png" alt="diagrama" className={styles.cardImageBody} />

          <img src="/tooth-diagram.png" alt="diagrama" className={styles.cardImageTooth} />

          <div className={styles.ArrowRight}></div>

        </div>
      </section>


    </main>
  );
}
