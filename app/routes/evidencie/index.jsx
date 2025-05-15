import React, { useState } from 'react';
import { useTheme } from '../../providers/themeContext';
import styles from './evidencia.module.css'; // Crie um arquivo CSS Module para este componente
import Input from '../../components/form/inputForm'; // Adapte o caminho se necessário
import jsPDF from 'jspdf';

const AdicionarEvidenciaForm = () => {

  const { theme } = useTheme();

  const [form, setForm] = useState({
    tipoEvidencia: 'Foto', // Valor inicial conforme a imagem
    numeroEvidencia: '01', // Valor inicial conforme a imagem
    titulo: '',
    responsavel: 'Dra. Sam Hang-Yun', // Valor inicial conforme a imagem
    categoria: '',
    vitima: 'Marília Mendonça', // Valor inicial conforme a imagem
    origem: '',
    dataColeta: '02/05/2025 20:22', // Valor inicial conforme a imagem
    status: '',
    condicao: '',
    local: '',
    observacoesTecnicas: '',
    descricaoDetalhada: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const gerarPDFEvidencia = (form) => {
  const doc = new jsPDF();
  let y = 20;

  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(`Relatório de Evidência`, 105, y, { align: 'center' });
  y += 10;

  const drawSection = (title) => {
    doc.setFillColor(220, 220, 240); // Cor de fundo azul claro
    doc.rect(10, y, 190, 10, 'F');
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(title, 15, y + 7);
    y += 14;
  };

  const escreverLinha = (label, value) => {
    doc.setFontSize(11);
    doc.setTextColor(50);
    doc.text(`${label}: ${value || '-'}`, 15, y);
    y += 6;
  };

  drawSection('Informações da Evidência');
  escreverLinha('Tipo', form.tipoEvidencia);
  escreverLinha('Número', form.numeroEvidencia);
  escreverLinha('Título', form.titulo);
  escreverLinha('Responsável', form.responsavel);
  escreverLinha('Categoria', form.categoria);
  escreverLinha('Vítima', form.vitima);
  escreverLinha('Origem', form.origem);
  escreverLinha('Data de Coleta', form.dataColeta);
  escreverLinha('Status', form.status);
  escreverLinha('Condição', form.condicao);

  drawSection('Local e Observações');
  escreverLinha('Local', 'Rua aviador dos camarões, 158'); // Se quiser tornar dinâmico, passe como prop
  y += 2;

  drawSection('Observações Técnicas');
  const obs = doc.splitTextToSize(form.observacoesTecnicas || '-', 180);
  doc.text(obs, 15, y);
  y += obs.length * 6 + 4;

  drawSection('Descrição Detalhada');
  const desc = doc.splitTextToSize(form.descricaoDetalhada || '-', 180);
  doc.text(desc, 15, y);
  y += desc.length * 6 + 4;

  doc.save(`evidencia-${form.numeroEvidencia || 'sem_numero'}.pdf`);
};

  return (
     <div className={`flex flex-col items-start`}>
  <h1
    className={`${
      theme === 'dark' ? '' : 'text-[#0A4A81]'
    } sm:text-[2rem] text-[1.5rem] font-semibold mb-[1.5rem]`}
  >
    Adicionar Evidência
  </h1>

  <div
    className={`${
      theme === 'dark' ? 'bg-[#212121]' : 'bg-white'
    } flex flex-col w-auto px-[1rem] py-[2rem] gap-[1.5rem] border border-[#ccc] rounded-[20px] shadow-2xl`}
  >
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Informações da Evidência</h2>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="tipoEvidencia"
                name={"tipo Evidencia"}
                value={form.tipoEvidencia}
                onChange={handleChange}
                readOnly // Campo não editável conforme a imagem
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="numeroEvidencia"
                name={"numero Evidencia"}
                value={form.numeroEvidencia}
                onChange={handleChange}
                readOnly // Campo não editável conforme a imagem
              />
            </div>
            <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                Status:
              </label>
              <select
                id="status"
                name={"status"}
                value={form.status}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione</option>
                <option value="aberto">Aberto</option>
                <option value="fechado">Fechado</option>
                <option value="em_analise">Em Análise</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="condicao" className="block text-gray-700 text-sm font-bold mb-2">
                Condição:
              </label>
              <select
                id="condicao"
                name={"condicao"}
                value={form.condicao}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione</option>
                <option value="bem_conservada">Bem Conservada</option>
                <option value="danificada">Danificada</option>
                <option value="parcial">Parcial</option>
              </select>
            </div>
          </div>
          </div>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="titulo"
                name={"Titulo"}
                value={form.titulo}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="responsavel"
                name={"responsavel"}
                value={form.responsavel}
                onChange={handleChange}
                readOnly // Campo não editável conforme a imagem
              />
            </div>
          </div>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="categoria"
                name={"Categoria"}
                value={form.categoria}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="vitima"
                name={"vitima"}
                value={form.vitima}
                onChange={handleChange}
                readOnly // Campo não editável conforme a imagem
              />
            </div>
          </div>
          <div className={styles.container_input}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="origem"
                name={"origem"}
                value={form.origem}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                id="dataColeta"
                name={"Data Coleta"}
                value={form.dataColeta}
                onChange={handleChange}
                readOnly // Campo não editável conforme a imagem
              />
            </div>
          </div>
        <h2 className={styles.sectionTitle}>Detalhes da Evidência</h2>
          <div className={styles.container_input_vertical}>
            <div className={styles.inputGroupVertical}>
              <label htmlFor="local" className="block text-gray-700 text-sm font-bold mb-2">
                Local:
              </label>
              {/* Placeholder para o mapa */}
              <div className={styles.mapPlaceholder}>
                <img src="placeholder_map.png" alt="Mapa do Local" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <p className="text-gray-600 text-sm mt-1">Rua aviador dos camarões, 158</p>
              </div>
            </div>
            <div className={styles.inputGroupVertical}>
              <label htmlFor="observacoesTecnicas" className="block text-gray-700 text-sm font-bold mb-2">
                Observações Técnicas:
              </label>
              <textarea
                id="observacoesTecnicas"
                name={"observações Tecnicas"}
                value={form.observacoesTecnicas}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20" 
              />
            </div>
            <div className={styles.inputGroupVertical}>
              <label htmlFor="descricaoDetalhada" className="block text-gray-700 text-sm font-bold mb-2">
                Descrição detalhada:
              </label>
              <textarea
                id="descricaoDetalhada"
                name={"descricao Detalhada"}
                value={form.descricaoDetalhada}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" 
              />
            </div>
          </div>
        </div>
        <button
          className={styles.EvidenciaButton}
        >
          Salvar Evidência
        </button>
        <button
              className={styles.criarpdfButton}
              onClick={() => gerarPDFEvidencia(form)}
            >
              Gerar Relatório PDF
            </button>
      </div>
    </div>
  );
};

export default AdicionarEvidenciaForm;