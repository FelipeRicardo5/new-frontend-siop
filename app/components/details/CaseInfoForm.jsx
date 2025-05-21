import styles from './CaseInfoForm.module.css';

export default function CaseInfoForm() {
  return (
    <div className={styles.form}>
      <label>Identificação: <input value="Lorem Ipsum" readOnly /></label>
      <label>Responsável: <input value="Dra. Sam Hang-Yun" readOnly /></label>
      <label>Local do Incidente: <input value="" /></label>
      <label>Causa da morte: <input value="Impacto por queda" readOnly /></label>
      <label>Data do caso: <input value="02/05/2025 20:22" readOnly /></label>
      <label>Instituição: <input value="IML" readOnly /></label>
      <label>Status: 
        <select>
          <option>Aberto</option>
          <option>Fechado</option>
          <option>Em Análise</option>
        </select>
      </label>
    </div>
  );
}
