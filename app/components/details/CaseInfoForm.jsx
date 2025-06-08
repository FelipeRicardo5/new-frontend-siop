import { useTheme } from '../../providers/themeContext';

export default function CaseInfoForm({ titulo, responsavel, localizacao, causaMorte, dataCaso, instituicao, status }) {
  const { theme } = useTheme();

  return (
    <div className={`grid gap-4 p-4 rounded-xl shadow-md 
      ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      
      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Identificação:</span>
        <input value={titulo} readOnly className="input-style" />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Responsável:</span>
        <input value={responsavel} readOnly className="input-style" />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Local do Incidente:</span>
        <input value={localizacao} className="input-style" />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Causa da morte:</span>
        <input value={causaMorte} readOnly className="input-style" />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Data do caso:</span>
        <input value={dataCaso} readOnly className="input-style" />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Instituição:</span>
        <input value={instituicao} readOnly className="input-style" />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Status:</span>
        <input value={status} readOnly className="input-style" />
      </label>
    </div>
  );
}
