import styles from './laudo.module.css';
import Input from '../../components/form/inputForm';
import { useTheme } from '../../providers/themeContext';
import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function GerarLaudo() {
    const { theme } = useTheme();

    const [form, setForm] = useState({
        numeroCaso: '', nomeCaso: '', dataPericia: '', horaPericia: '', localPericia: '',
        autoridadeRequisitante: '', peritosDesignados: '', pessoaPericiada: '', finalidade: '',
        tipoExame: '', quesitos: '', historico: '', descricao: '', discussao: '',
        conclusao: '', respostaQuesitos: '', diagnostico: '', identificacaoVitimado: '', resultadoIdentificacao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };

    const gerarPDF = () => {
        const doc = new jsPDF();
        let y = 20;

        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text(`Laudo Técnico`, 105, y, { align: 'center' });
        y += 10;

        const drawSection = (title) => {
            doc.setFillColor(230, 230, 250);
            doc.rect(10, y, 190, 10, 'F');
            doc.setFontSize(12);
            doc.setTextColor(0);
            doc.text(title, 15, y + 7);
            y += 16;
        };

        drawSection('Informações do Caso');
        doc.setFontSize(11);
        doc.text(`Número: ${form.numeroCaso}`, 15, y);
        doc.text(`Nome: ${form.nomeCaso}`, 110, y);
        y += 6;
        doc.text(`Data: ${form.dataPericia}`, 15, y);
        doc.text(`Hora: ${form.horaPericia}`, 110, y);
        y += 6;
        doc.text(`Local: ${form.localPericia}`, 15, y);
        y += 8;

        drawSection('Envolvidos');
        doc.text(`Autoridade: ${form.autoridadeRequisitante}`, 15, y);
        y += 6;
        doc.text(`Peritos: ${form.peritosDesignados}`, 15, y);
        y += 6;
        doc.text(`Periciado: ${form.pessoaPericiada}`, 15, y);
        y += 8;

        drawSection('Objetivo');
        doc.text(`Finalidade: ${form.finalidade}`, 15, y);
        y += 6;
        doc.text(`Tipo de Exame: ${form.tipoExame}`, 15, y);
        y += 6;

        const camposLongos = [
            { label: 'Quesitos', value: form.quesitos },
            { label: 'Histórico', value: form.historico },
            { label: 'Descrição', value: form.descricao },
            { label: 'Discussão', value: form.discussao },
            { label: 'Conclusão', value: form.conclusao },
            { label: 'Resposta aos Quesitos', value: form.respostaQuesitos },
            { label: 'Diagnóstico Parcial', value: form.diagnostico },
            { label: 'Forma de Identificação', value: form.identificacaoVitimado },
            { label: 'Resultado da Identificação', value: form.resultadoIdentificacao },
        ];

        camposLongos.forEach(({ label, value }) => {
            if (y > 260) {
                doc.addPage();
                y = 20;
            }
            drawSection(label);
            const splitText = doc.splitTextToSize(value || '-', 180);
            doc.text(splitText, 15, y);
            y += splitText.length * 6 + 4;
        });

        doc.save(`laudo-${form.nomeCaso || 'sem_nome'}.pdf`);
    };

    return (
        <div className={`flex flex-col items-start`}>
    <h1
        className={`${
        theme === 'dark' ? '' : 'text-[#0A4A81]'
        } sm:text-[2rem] text-[1.5rem] font-semibold mb-[1.5rem]`}
    >
        Gerar laudo
    </h1>

    <div
        className={`${
        theme === 'dark' ? 'bg-[#212121]' : 'bg-white'
        } flex flex-col w-auto px-[1rem] py-[2rem] gap-[1.5rem] border border-[#ccc] rounded-[20px] shadow-2xl`}
    >
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Dados do Caso</h2>
                    <div className={styles.container_input}>
                        <Input name="Nome do Caso" value={form.nomeCaso} onChange={handleChange} placeholder="Nome do Caso" />
                    </div>
                    <div className={styles.container_input}>
                        <Input name="Data Pericia" type="date" value={form.dataPericia} onChange={handleChange} />
                        <Input name="Hora Pericia" type="time" value={form.horaPericia} onChange={handleChange} />
                        <Input name="Local Pericia" value={form.localPericia} onChange={handleChange} placeholder="Local da Perícia" />
                    </div>
            </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Partes Envolvidas</h2>
                    <div className={styles.container_input}>
                        <Input name="Autoridade Requisitante" value={form.autoridadeRequisitante} onChange={handleChange} placeholder="Autoridade Requisitante" />
                        {/* we have to review this input */}
                    </div>
                    <div className={styles.container_input}>
                        <Input name="Peritos Designados" value={form.peritosDesignados} onChange={handleChange} placeholder="Peritos Designados" />
                        {/* here we can do a get */}
                        <Input name="Pessoa Periciada" value={form.pessoaPericiada} onChange={handleChange} placeholder="Pessoa Periciada" />
                        {/* here we can do a get in victims whithin a case*/}
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Finalidade e Exame</h2>
                    <div className={styles.container_input}>
                        <Input name="Finalidade" value={form.finalidade} onChange={handleChange} placeholder="Finalidade" />
                        <Input name="Tipo de Exame" value={form.tipoExame} onChange={handleChange} placeholder="Tipo de Exame" />
                        <Input name="Quesitos" value={form.quesitos} onChange={handleChange} multiline />
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Corpo do Laudo</h2>
                    <div className={styles.container_input_vertical}>
                        <Input name="historico" value={form.historico} onChange={handleChange} multiline />
                        <Input name="descricao" value={form.descricao} onChange={handleChange} multiline />
                        <Input name="discussao" value={form.discussao} onChange={handleChange} multiline />
                        <Input name="conclusao" value={form.conclusao} onChange={handleChange} multiline />
                        <Input name="resposta Quesitos" value={form.respostaQuesitos} onChange={handleChange} multiline />
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Identificação</h2>
                    <div className={styles.container_input_vertical}>
                        <Input name="diagnostico" value={form.diagnostico} onChange={handleChange} multiline />
                        <label className="flex flex-col font-semibold text-[#8c8c8c]"> Identificacão Vitimado:
                            <select
                                name="identificacão Vitimado"
                                value={form.identificacaoVitimado}
                                onChange={handleChange}
                                className={`${theme === 'dark' ? 'bg-[#363636]' : 'bg-white'} px-3.5 py-2 border border-[#ccc] text-[#333] rounded-lg outline-none`}
                            >
                                <option value="">Selecione o método</option>
                                <option value="Papiloscopia">Papiloscopia</option>
                                <option value="Odontologico">Odontológico</option>
                                <option value="DNA">DNA</option>
                                <option value="familia">Reconhecimento Familiar</option>
                            </select>
                        </label>
                        <Input name="resultado Identificacao" value={form.resultadoIdentificacao} onChange={handleChange} multiline />
                    </div>
                </div>

                <button onClick={gerarPDF} className={styles.gerarPDF}>
                Gerar PDF
                </button>
            </div>
        </div>
    );
}
