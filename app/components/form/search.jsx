import { Search as SearchIcon } from "lucide-react";
import { useTheme } from "../../providers/themeContext";

export function Search({ searchTerm, setSearchTerm, label, placeholder }) {
  const { theme } = useTheme();

  const inputClassName = `
    w-full p-2 pl-10 border rounded outline-none transition-colors shadow-xl
    ${theme === "dark"
      ? "bg-[#212121] border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
      : "bg-white border-gray-400 text-gray-900 placeholder-gray-500 focus:border-blue-500"}
  `;

  const labelClassName = `font-normal mb-1 block ${theme === "dark" ? "text-white" : "text-gray-700"}`;

  const iconClassName = `${theme === "dark" ? "text-gray-400" : "text-gray-400"}`; // mesmo tom para ambos, mas pode ajustar

  return (
    <div>
      {label && <label className={labelClassName}>{label}</label>}
      <div className="relative">
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconClassName}`}>
          <SearchIcon size={18} />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder || "Buscar por casos"}
          className={inputClassName}
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export default Search;
