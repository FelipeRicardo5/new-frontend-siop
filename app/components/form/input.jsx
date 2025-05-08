export default function Input({ type, name, value, onChange, className, placeholder }) {
    return (
        <input className={`bg-white px-3.5 py-2.5 border-1 border-[#ccc] text-[#ccc] rounded-sm outline-none ${className}`}
            type={type}
            name={name}
            value={value}
            placeholder={name}
            onChange={onChange}
        />
    );
}   	    