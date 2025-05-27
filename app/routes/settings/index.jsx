import styles from './settings.module.css';
import Input from '../../components/form/inputForm'
import Profile from '/public/iconTeste.png'
import ToggleSwitch from '../../components/form/toggleSwitch';
import { useState } from 'react';
import ProfileAvatar from '../../components/layouts/profileAvatar';
import { useTheme } from '../../providers/themeContext';


export default function Settings() {

    const { theme, toggleTheme } = useTheme()

    const [ toggle, setToggle ] = useState()
    const MANO = () => {
        setToggle(!toggle)
    }

    return (
        <div className={`flex flex-col items-start`}>
            <h1 className={`${theme === 'dark' ? '' : 'text-[#0A4A81]'} sm:text-[2rem] text-[1.5rem] font-semibold mb-[1.5rem]`} >Configurações</h1>
            <div className={`${theme === 'dark' ? 'bg-[#212121]' : 'text-[#0A4A81] bg-white'} flex flex-col items-center h-auto w-auto px-[1rem] py-[2rem] gap-[1.5rem] border-1 border-[#ccc] rounded-[20px] shadow-2xl/30`}>
                <div>
                    <ProfileAvatar 
                    src={Profile}
                    />
                </div>
                <div className={styles.container_input}>
                    <Input
                        label={"Nome"}
                    />
                    <Input
                        label={"Endereço"}
                    />
                </div>
                <div className={styles.container_input}>
                    <Input
                        label={"CRO"}
                        value={"SP 123456"} // Só dar um get no cro!
                    />
                    <Input
                        label={"E-mail"}
                    />
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