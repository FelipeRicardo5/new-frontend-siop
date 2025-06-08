import { useTheme } from '../../providers/themeContext';

export default function DescriptionBox({ descricao }) {
  const { theme } = useTheme();

  return (
    <div className={`my-5 p-4 rounded-xl border 
      ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>

      <h4 className={`mb-2 text-lg font-semibold 
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Descrição:
      </h4>

      <div className={`text-base leading-relaxed p-3 rounded-lg shadow-inner break-words 
        ${theme === 'dark' 
          ? 'bg-gray-700 text-white' 
          : 'bg-white text-gray-700'}`}>
        {descricao}
      </div>
    </div>
  );
}
