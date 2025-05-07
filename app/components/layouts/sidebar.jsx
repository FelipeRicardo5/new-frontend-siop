import { Home, Settings, LogOut, FolderSearch, NotepadText, UserRoundPen, Icon, ShieldIcon } from "lucide-react";
import IconTeste from '/public/iconTeste.png'

export default function Sidebar() {
    return (
        <aside className="fixed top-12 left-0 w-64 h-[calc(100vh-3rem)] bg-white text-white flex flex-col pl-4 pt-4 space-y-4 z-40">
            <div className=" flex flex-col items-center ">
                <img src={IconTeste}
                    width={100}
                    style={{ borderRadius: "100%" }}
                />
                <div className="gap-5 mt-10 text-black flex flex-col items-center" >
                    <p>Dev. Sênior Felipe Ricardo</p>
                    <div className="text-white flex p-1 gap-2 w-[100px] justify-center items-center rounded-lg bg-[#0A4A81]" >
                        <ShieldIcon size={20} />
                        perito
                    </div>
                </div>
            </div>
            <nav className="flex flex-col space-y-2">
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                    <Home size={20} />
                    <span>Painel</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                    <FolderSearch size={20} />
                    <span>Banco Odontológico</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                    <NotepadText size={20} />
                    <span>Relatórios</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                    <UserRoundPen size={20} />
                    <span>Usuários</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                    <Settings size={20} />
                    <span>Configurações</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-[#F4F6F6] text-[#ccc] hover:text-[#0A4A81] rounded-l transition duration-300 ease-out">
                    <LogOut size={20} />
                    <span>Sair</span>
                </a>
            </nav>
        </aside>
    );
}
