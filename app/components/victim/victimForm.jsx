import React from 'react';
import styles from './victimForm.module.css';

export default function VictimForm() {
  return (
    <div className={styles.form}>
      <label> NIC: </label>
      <input type="text" value="985654321" readOnly  className={styles.inputVictim}/>
      
      <label>Nome:</label>
      <input type="text" value="Fulaninha de tal" readOnly className={styles.inputVictim} />

      <label>Sexo da Vítima:</label>
      <input type="text" value="Feminino" readOnly className={styles.inputVictim} />

      <label>Cor/Etnia:</label>
      <input type="text" value="Branca" readOnly className={styles.inputVictim} />

      <label>Documento:</label>
      <input type="text" value="RG ou CPF" readOnly className={styles.inputVictim} />

      <label>Data de Nascimento:</label>
      <input type="text" value="23/05/1980" readOnly className={styles.inputVictim} />

      <label>Endereço:</label>
      <input type="text" value="IML" readOnly className={styles.inputVictim} />
    </div>
  );
}
