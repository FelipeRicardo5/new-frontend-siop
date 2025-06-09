import { useTheme } from '../../providers/themeContext';
import Input from '../form/inputForm';

export default function CaseInfoForm({ titulo, responsavel, localizacao, causaMorte, dataCaso, instituicao, status }) {
  const { theme } = useTheme();

return (
  <div
    className={`grid gap-4 p-4 rounded-xl shadow-md 
      ${theme === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-900'}`}
  >
    <Input
      type="text"
      label="Identificação:"
      name="titulo"
      value={titulo}
      readOnly
    />

    <Input
      type="text"
      label="Responsável:"
      name="responsavel"
      value={responsavel}
      readOnly
    />

    <Input
      type="text"
      label="Local do Incidente:"
      name="localizacao"
      value={localizacao}
      onChange={() => {}}
    />

    <Input
      type="text"
      label="Causa da morte:"
      name="causaMorte"
      value={causaMorte}
      readOnly
    />

    <Input
      type="text"
      label="Data do caso:"
      name="dataCaso"
      value={dataCaso}
      readOnly
    />

    <Input
      type="text"
      label="Instituição:"
      name="instituicao"
      value={instituicao}
      readOnly
    />

    <Input
      type="text"
      label="Status:"
      name="status"
      value={status}
      readOnly
    />
  </div>
);
}
