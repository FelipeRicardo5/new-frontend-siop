import { useTheme } from "../../providers/themeContext";

export default function MapBox() {
  const { theme } = useTheme();

  return (
    <div
      className={`mt-4 rounded-lg overflow-hidden shadow-md 
        ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5792783288584!2d-34.87953642411036!3d-8.042236580317654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1889186d6df9%3A0x335db590359f1ef3!2sAv.%20Dr.%20Jayme%20da%20Fonte%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2050110-005!5e0!3m2!1spt-BR!2sbr!4v1747139351830!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
