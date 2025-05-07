export default function Input({ type, name, value, onChange, className, placeholder }) {
    return (
        <input className={`bg-white px-3.5 py-2.5 mb-[1.5rem] border-1 border-[#ccc] text-[#ccc] rounded-sm ${className}`}
            type={type}
            name={name}
            value={value}
            placeholder={name}
            onChange={onChange}
        />
    );
}   	    