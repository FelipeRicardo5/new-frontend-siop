import { useTheme } from "../../providers/themeContext";

export default function Input({ type, name, value, onChange, className, placeholder }) {
    const { theme, toggleTheme } = useTheme()
    
    return (
        <label className="flex flex-col font-semibold text-[#8c8c8c]" >
            {name}
            <input className={`${theme === 'dark' ? 'bg-[#363636]' : 'bg-white'}  px-3.5 py-1.5 border-1 border-[#ccc] text-[#ccc] rounded-lg outline-none ${className}`}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    );
}   	    