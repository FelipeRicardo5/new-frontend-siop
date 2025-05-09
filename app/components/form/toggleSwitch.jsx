import { useState } from 'react';
import { useTheme } from '../../providers/themeContext';


export default function ToggleSwitch({ label, checked, onChange }) {
    const { theme, toggleTheme } = useTheme()
  
  
    return (
    <label className={`flex items-center gap-2 cursor-pointer select-none`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className={`relative w-12 h-7 rounded-full transition-colors duration-300
        ${checked ? 'bg-green-500' : 'bg-gray-300'}`}>
        <div
          className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300
          ${checked ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </div>
      {label && <span className={`${theme === 'dark' ? 'text-white' : 'text-[#ccc]'} text-sm text-gray-700`}>{label}</span>}
    </label>
  );
}
