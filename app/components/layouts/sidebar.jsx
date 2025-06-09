import { useState, useEffect } from "react";
import { Home, Settings, LogOut, FolderSearch, NotepadText, UserRoundPen, ShieldIcon, ChevronLeft, ChevronRight, MessageCircleMoreIcon } from "lucide-react";
import { Link } from "react-router";
import ProfileAvatar from "./profileAvatar";
import Profile from '/public/iconTeste.png';
import { useTheme } from "../../providers/themeContext";
import { useNavigate } from "react-router";

export default function Sidebar({ setSidebarOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const navigate = useNavigate();
    const id = localStorage.getItem('userId');
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchUser = async () => {
            try {
                const res = await fetch(`https://backend-siop.onrender.com/api/users/${id}`);
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };

        fetchUser();
    }, [id]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setSidebarOpen(!isOpen);
    };

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500); // pequeno delay 
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

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
                        src={user?.profileImageUrl || Profile}
                    />
                    <div className={`gap-2 mt-5 flex flex-col items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`} >
                        <p className="font-normal" ><b>usuário: </b>{user?.nome}</p>
                        <div className="text-white flex p-1 gap-2 w-[130px] justify-center items-center rounded-lg bg-linear-to-t from-[#072f52] to-[#0A4A81] shadow-lg/20" >
                            <ShieldIcon size={20} />
                            {user?.role === 'admin' ? (
                                <span className="text-xs">Administrador</span>
                            ) : (
                                <span className="text-xs">Perito</span>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <nav className={`flex flex-col space-y-2 text-sm`}>
                {!isOpen && (
                    <Link
                    to="/settings" 
                    >
                        <div>
                            <img
                                src={user?.profileImageUrl || Profile}
                                className="w-10 h-10 rounded-full object-cover  border-gray-500"
                            />
                        </div>
                    </Link>
                )
                }
                <Link
                    to="/dashboard"
                    className={`group ${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out relative`}
                >
                    <Home size={20} />
                    {isOpen && <span>Painel</span>}
                    {!isOpen && (
                        <span className="absolute left-16 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                            Dashboard
                        </span>
                    )}
                </Link>

                <Link
                    to="/cases"
                    className={`group ${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out relative`}
                >
                    <FolderSearch size={20} />
                    {isOpen && <span>Banco Odontológico</span>}
                    {!isOpen && (
                        <span className="absolute left-16 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                            Banco Odontológico
                        </span>
                    )}
                </Link>

                <Link
                    to="/channels"
                    className={`group ${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out relative`}
                >
                    <MessageCircleMoreIcon size={20} />
                    {isOpen && <span>Chat</span>}
                    {!isOpen && (
                        <span className="absolute left-16 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                            Chat
                        </span>
                    )}
                </Link>

                <Link
                    to="/users"
                    className={`group ${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out relative`}
                >
                    <UserRoundPen size={20} />
                    {isOpen && <span>Usuários</span>}
                    {!isOpen && (
                        <span className="absolute left-16 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                            Usuários
                        </span>
                    )}
                </Link>

                <Link
                    to="/settings"
                    className={`group ${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out relative`}
                >
                    <Settings size={20} />
                    {isOpen && <span>Configurações</span>}
                    {!isOpen && (
                        <span className="absolute left-16 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                            Configurações
                        </span>
                    )}
                </Link>

                <button
                    onClick={handleLogout}
                    className={`group ${theme === 'dark' ? 'hover:bg-[#373737] text-white' : 'bg-[#fff] hover:text-[#0A4A81] hover:bg-[#F4F6F6]'} flex items-center gap-3 p-2 text-[#ccc] rounded-l transition duration-300 ease-out relative`}
                >
                    <LogOut size={20} />
                    {isOpen && <span>Sair</span>}
                    {!isOpen && (
                        <span className="absolute left-16 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                            Sair
                        </span>
                    )}
                </button>
            </nav>

        </aside>
    );
}
