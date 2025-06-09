import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // Corrigido!
import noPicture from '../../../public/nopicture.png';
import { MessageSquareQuote } from 'lucide-react';
import { useTheme } from '../../providers/themeContext';

export default function ChannelChat() {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    const { theme } = useTheme();

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const url =
                    role === 'perito'
                        ? `https://backend-siop.onrender.com/api/cases/user/${id}`
                        : `https://backend-siop.onrender.com/api/cases`;

                const response = await fetch(url);
                const data = await response.json();
                setCases(data);
            } catch (error) {
                console.error('Erro ao buscar casos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCases();
    }, [id, role]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className={`p-4 min-h-screen w-full max-w-3xl mx-auto rounded-2xl ${theme === 'dark' ? ' text-white' : 'text-gray-800'}`}>
            <h1 className={`text-3xl font-semibold text-start mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0A4A81]'}`}>
                Canais de Chats
            </h1>

            <div className="flex flex-col gap-2 divide-gray-300 rounded-2xl">
                {cases.map((c) => (
                    <div
                        key={c._id}
                        className={`flex items-center justify-between py-4 px-2 rounded-lg shadow-2xs transition-colors duration-200 ${theme === 'dark' ? 'bg-[#131313] text-white hover:bg-[#181818]' : 'bg-white text-gray-800 hover:bg-[#e7e7e7]'}`}
                    >
                        <div className="flex items-center gap-4 min-w-0">
                            <img
                                src={c.caseImageUrl || noPicture}
                                alt={c.titulo}
                                className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                            />
                            <div className="flex flex-col min-w-0">
                                <h3 className="text-base font-semibold truncate">{c.titulo}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                 {c.createdAt}
                                </p>
                                {c.responsavel?.nome && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                        <b>Responsável:</b> {c.responsavel.nome}
                                    </p>
                                )}
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                    <b>Instituição:</b> {c.instituicao}
                                </p>
                            </div>
                        </div>

                        <Link
                            to={`/chat/${c._id}`}
                            className={`flex items-center justify-center w-10 h-10 text-[#4d4d4d] rounded-full transition-colors ${theme === 'dark' ? 'bg-[#212121] hover:text-white' : 'bg-white hover:text-[#0A4A81]'}`}
                        >
                            <MessageSquareQuote size={20} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
