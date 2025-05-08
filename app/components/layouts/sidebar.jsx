import { useState } from "react";
import { Home, Settings, LogOut, FolderSearch, NotepadText, UserRoundPen, ShieldIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import IconTeste from '/public/iconTeste.png';

export default function Sidebar({ setSidebarOpen }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setSidebarOpen(!isOpen);
    };

    return (
            <aside className={`fixed top-12 left-0 h-[calc(100vh-3rem)] bg-white text-white flex flex-col pt-4 space-y-4 z-40 transition-all duration-300 ease-in-out
                ${isOpen ? 'w-64 pl-4' : 'w-16 items-center'}`}>
                <button
                    onClick={toggleSidebar}
                    className="top-4 left-4 w-[2.5rem] z-50 bg-[#0A4A81] text-white p-2 rounded-full shadow-lg"
                >
                    {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
                {isOpen && (
                    <div className="flex flex-col items-center">
                        <img src={IconTeste} width={100} style={{ borderRadius: "100%" }} />
                        <div className="gap-5 mt-10 text-black flex flex-col items-center" >
                            <p>Dev. Sênior Felipe Ricardo</p>
                            <div className="text-white flex p-1 gap-2 w-[100px] justify-center items-center     rounded-lg bg-[#0A4A81]" >
                                <ShieldIcon size={20} />
                                perito
                            </div>
                        </div>
                    </div>
                )}

                <nav className="flex flex-col space-y-2 text-sm">
                    <Link to="/dashboard" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                        <Home size={20} title="Painel" />
                        {isOpen && <span>Painel</span>}
                    </Link>
                    <Link to="/cases" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                        <FolderSearch size={20} title="Banco Odontológico" />
                        {isOpen && <span>Banco Odontológico</span>}
                    </Link>
                    <Link to="/reports" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                        <NotepadText size={20} title="Relatórios" />
                        {isOpen && <span>Relatórios</span>}
                    </Link>
                    <Link to="/users" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                        <UserRoundPen size={20} title="Usuários" />
                        {isOpen && <span>Usuários</span>}
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                        <Settings size={20} title="Configurações" />
                        {isOpen && <span>Configurações</span>}
                    </Link>
                    <Link to="/" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                        <LogOut size={20} title="Sair" />
                        {isOpen && <span>Sair</span>}
                    </Link>
                </nav>
            </aside>
    );
}
