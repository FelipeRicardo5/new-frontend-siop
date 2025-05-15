import React, { useState } from 'react';
import { useTheme } from '../../providers/themeContext';
import styles from './cases.module.css'; // Importe o arquivo CSS Module
import Input from '../../components/form/inputForm'; // Adapte o caminho se necessário
import { useNavigate } from 'react-router';

const CriarCasoForm = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    identificacao: '',
    nomeCaso: '',
    responsavel: '',
    local: '',
    descricao: '',
    data: '',
    hora: '',
    corPele: '',
    sexoVitima: '',
    causaMorte: '',
    identificado: '', // 'Sim' ou 'Não'
    // Adicione aqui os estados para os campos de evidência se necessário
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const adicionarEvidencia = () => {
    navigate('/evidencie');
    console.log('Adicionar Evidência');
  };

  const criarCaso = () => {
    // Implemente a lógica para criar o caso
    console.log('Criar Caso:', form);
  };

  return (
    <div className={`flex flex-col items-start`}>

      <h1
        className={`${theme === 'dark' ? '' : 'text-[#0A4A81]'
          } sm:text-[2rem] text-[1.5rem] font-semibold mb-[1.5rem]`}
      >
        Criar caso
      </h1>

      <div
        className={`${theme === 'dark' ? 'bg-[#212121]' : 'bg-white'
          } flex flex-col w-auto px-[1rem] py-[2rem] gap-[1.5rem] border border-[#ccc] rounded-[20px] shadow-2xl`}
      >
        {/* Identificação e Nome do Caso */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Dados do Caso</h2>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="responsavel"
                name={"responsavel"}
                value={form.responsavel}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="nomeCaso"
                name={"Nome Caso"}
                value={form.nomeCaso}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Local e Descrição */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Informações do caso </h2>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="local"
                name={"local"}
                value={form.local}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="descricao"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <Input
                type="date"
                id="data"
                name={"data"}
                value={form.data}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="time"
                id="hora"
                name={"hora"}
                value={form.hora}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* Informações da Vítima (Selects) */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Informações da Vítima</h2>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <label htmlFor="corPele" className="block text-gray-700 text-sm font-bold mb-2">
                Cor da Pele:
              </label>
              <select
                id="corPele"
                name={"cor Pele"}
                value={form.corPele}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione</option>
                <option value="branco">Branco</option>
                <option value="preto">Preto</option>
                <option value="pardo">Pardo</option>
                <option value="amarelo">Amarelo</option>
                <option value="indigena">Indígena</option>
                <option value="nao_declarado">Não Declarado</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="sexoVitima" className="block text-gray-700 text-sm font-bold mb-2">
                Sexo da Vítima:
              </label>
              <select
                id="sexoVitima"
                name={"sexo Vitima"}
                value={form.sexoVitima}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
                <option value="nao_declarado">Não Declarado</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="identificado" className="block text-gray-700 text-sm font-bold mb-2">
                Identificado:
              </label>
              <select
                id="identificado"
                name={"identificado"}
                value={form.identificado}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>
          </div>
          <div className={styles.inputGroup}>

            <Input
              type="text"
              id="causaMorte"
              name={"causa Morte"}
              value={form.causaMorte}
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>

        <button
          onClick={adicionarEvidencia}
          className={styles.adicionarEvidenciaButton}
        >
          + Adicionar Evidência
        </button>

        {/* Criar Caso */}
        <button
          onClick={criarCaso}
          className={styles.criarCasoButton}
        >
          Criar caso
        </button>
      </div>
    </div>
  );
};

export default CriarCasoForm;