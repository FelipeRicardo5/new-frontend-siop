import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './StepCaseInfo.module.css'; 
import CaseInfoForm from '../../details/CaseInfoForm';
import DescriptionBox from '../../details/DescriptionBox';
import MapBox from '../../details/MapBox';

export default function StepCaseInfo() {
  const { id } = useParams();
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await fetch(`https://backend-siop.onrender.com/api/cases/${id}`);
        if (!response.ok) throw new Error('Erro ao buscar detalhes do caso');
        const json = await response.json();
        setData(json);
        console.log('Detalhes do caso:', json);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchCaseDetails();
  }, [id]);

  return (
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
      </div>

      <div className={styles.right}>
        <DescriptionBox descricao={data.descricao} />
        <MapBox
          latitude={-8.042236}
          longitude={-34.879536}
          zoom={16}
          popupText="Av. Dr. Jayme da Fonte, Recife - PE"
        />
      </div>
    </section>
  );
}
