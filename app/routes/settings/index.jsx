import styles from './settings.module.css';
import Input from '../../components/form/inputForm';
import ToggleSwitch from '../../components/form/toggleSwitch';
import ProfileAvatar from '../../components/layouts/profileAvatar';
import { useTheme } from '../../providers/themeContext';
import Loading from "../../../public/tube-spinner.svg";
import { useEffect, useState } from 'react';
import profile from '../../../public/iconTeste.png';

export default function Settings() {
    const { theme, toggleTheme } = useTheme();
    const [user, setUser] = useState(null);
    const id = localStorage.getItem('userId');

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

    if (!user) {
        return (
            <div className={styles.loadingContainer}>
                <div> <img src={Loading} alt="Loading" width={50} height={50} /> </div>
                <div className={styles.loadingText}>Carregando...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start">
            <h1
                className={`${theme === 'dark' ? '' : 'text-[#0A4A81]'
                    } sm:text-[2rem] text-[1.5rem] font-semibold mb-[1.5rem]`}
            >
                Configurações
            </h1>
            <div
                className={`${theme === 'dark' ? 'bg-[#212121]' : 'text-[#0A4A81] bg-white'
                    } flex flex-col items-center h-auto w-auto px-[1rem] py-[2rem] gap-[1.5rem] border-1 border-[#ccc] rounded-[20px] shadow-2xl/30`}
            >
                <div className='cursor-pointer' >
                    <img 
                    src={user.profileImageUrl || "../../../public/iconTeste.png"} 
                    className='w-[120px] h-[120px] rounded-full object-cover'
                    />
                    
                </div>
                <div className={styles.container_input}>
                    <Input label="Nome" value={user.nome} readOnly />
                    <Input label="Cargo" value={user.role} readOnly />
                </div>
                <div className={styles.container_input}>
                    <Input label="CRO" value="(Adicionar depois)" readOnly />
                    <Input label="E-mail" value={user.email} readOnly />
                </div>
                <div className={styles.switch}>
                    <ToggleSwitch
                        label="Modo Escuro"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                    />
                </div>
            </div>
        </div>
    );
}
