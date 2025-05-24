import { useTheme } from "../../providers/themeContext";

export default function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  className,
}) {
  const { theme } = useTheme();

  return (
    <label className="flex flex-col font-semibold text-[#8c8c8c] gap-1">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`
          ${
            theme === "dark"
              ? "bg-[#363636] text-[#ccc]"
              : "bg-white text-black"
          }
          px-3.5 py-1.5 border border-[#ccc] rounded-lg outline-none ${className}
        `}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
