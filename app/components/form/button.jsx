export default function Button({ type, name, value, onClick, className }) {
    return (
        <button className={`bg-white text-[#0A4A81] p-3 w-full outline-none rounded-md hover:bg-[#1d6bad] hover:text-white hover:shadow-xl/25 transition duration-300 ease-in-out ${className}`}
            type={type}
            name={name}
            value={value}
            onClick={onClick}
        >
            {value}
        </button>
    );
}