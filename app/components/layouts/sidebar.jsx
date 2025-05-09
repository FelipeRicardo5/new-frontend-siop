import { useState, useEffect } from "react";
import { Home, Settings, LogOut, FolderSearch, NotepadText, UserRoundPen, ShieldIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import ProfileAvatar from "./profileAvatar";
import Profile from '/public/iconTeste.png';
import { useTheme } from "../../providers/themeContext";

export default function Sidebar({ setSidebarOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setSidebarOpen(!isOpen);
    };

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500); // pequeno delay 
        return () => clearTimeout(timer);
    }, []);

    return (
        <aside className={`fixed top-12 left-0 h-[calc(100vh-3rem)] ${theme === 'dark' ? 'bg-[#1f1f1f] text-white' : 'bg-[#fff]'} flex flex-col pt-4 space-y-4 z-40 transition-all duration-300 ease-in-out
                ${isOpen ? 'w-64 pl-4' : 'w-16 items-center'}`}>
            <button
                onClick={toggleSidebar}
                className="top-4 left-4 w-[2.2rem] z-50 bg-[#0A4A81] active:bg-white text-white active:text-[#0A4A81] p-2 rounded-full hover:shadow-xl transition duration-300 ease-in-out invisible sm:visible"
            >
                {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
            {isOpen && (
                <div className={`flex flex-col items-center`}>
                    <ProfileAvatar
                        src={Profile}
                    />
                    <div className={`gap-5 mt-5 flex flex-col items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`} >
                        <p className="font-semibold" >Dev. Sênior Felipe Ricardo</p>
                        <div className="text-white flex p-1 gap-2 w-[100px] justify-center items-center rounded-lg bg-linear-to-t from-[#072f52] to-[#0A4A81] shadow-lg/20" >
                            <ShieldIcon size={20} />
                            perito
                        </div>
                    </div>
                </div>
            )}

            <nav className={`flex flex-col space-y-2 text-sm`}>
                <Link to="/dashboard" className={`${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6] '} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out`}>
                    <Home size={20} title="Painel" />
                    {isOpen && <span>Painel</span>}
                </Link>
                <Link to="/cases" className={`${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out`}>
                    <FolderSearch size={20} title="Banco Odontológico" />
                    {isOpen && <span>Banco Odontológico</span>}
                </Link>
                <Link to="/reports" className={`${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out`}>
                    <NotepadText size={20} title="Relatórios" />
                    {isOpen && <span>Relatórios</span>}
                </Link>
                <Link to="/users" className={`${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out`}>
                    <UserRoundPen size={20} title="Usuários" />
                    {isOpen && <span>Usuários</span>}
                </Link>
                <Link to="/settings" className={`${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out`}>
                    <Settings size={20} title="Configurações" />
                    {isOpen && <span>Configurações</span>}
                </Link>
                <Link to="/" className={`${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out`}>
                    <LogOut size={20} title="Sair" />
                    {isOpen && <span>Sair</span>}
                </Link>
            </nav>
        </aside>
    );
}
