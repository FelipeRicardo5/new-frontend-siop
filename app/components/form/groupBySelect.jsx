import React from 'react';
import { useTheme } from '../../providers/themeContext'; // ajuste o caminho se necessário

const GroupBySelect = ({ groupBy, setGroupBy, groupOptions }) => {
  const { theme } = useTheme();

  // Estilos condicionais com base no tema
  const selectClass = `p-2 border rounded w-[200px] outline-none ${
    theme === 'dark' ? 'bg-[#212121] text-white border-gray-600' : 'bg-white text-black border-gray-300'
  }`;

  return (
    <div className={`flex flex-col gap-2`}>
      <label className="font-normal">Agrupar por:</label>
      <select
        value={groupBy}
        onChange={(e) => setGroupBy(e.target.value)}
        className={selectClass}
      >
        <option value="">Selecione</option>
        {groupOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GroupBySelect;
