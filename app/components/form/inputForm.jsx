import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Estilo padrão
import { useTheme } from "../../providers/themeContext";

export default function Input({
  type,
  label,
  name,
  value,
  onChange,
  className,
  placeholder,
  readOnly,
  tooltip,
}) {
  const { theme } = useTheme();

  const inputElement = (
    <input
      className={`
        ${
          theme === "dark"
            ? "bg-[#363636] text-[#ccc]"
            : "bg-white text-black"
        }
        px-3.5 py-1.5 border border-[#ccc] rounded-lg outline-none placeholder-gray-400 ${className}
      `}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
    />
  );

  return (
    <label className="flex flex-col font-semibold text-[#8c8c8c] gap-1">
      {label}
      {tooltip ? (
        <Tippy content={tooltip} placement="right" delay={[300, 0]}>
          <span>{inputElement}</span>
        </Tippy>
      ) : (
        inputElement
      )}
    </label>
  );
}
