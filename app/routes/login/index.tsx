import type { Route } from './+types';
import styles from './login.module.css';
import Input from '../../components/form/input.jsx';
import Button from '../../components/form/button.jsx';
import Logo from '/LogoWhite.png';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { authAPI } from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "SIOP" },
    { name: "Sistema de Identificação Odontológico Pericial", content: "Página de Login para acessar o sistema" },
  ];
}

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", senha: "" });

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await authAPI.login(loginData.email, loginData.senha);

      toast.success("Login realizado com sucesso!");

      const userId = response.id; // ✅ pegando diretamente da resposta
      if (userId) {
        setTimeout(() => {
          navigate(`/cases`, { replace: true });
        }
          , 1000); // ✅ redirecionando após 1 segundo
      } else {
        toast.error("Usuário não encontrado após login.");
      }
    } catch (error: string | any) {
      console.error("Credenciais Inválidas!", error);
      toast.error(error.message || "Credenciais Inválidas!");
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <div className={styles.container_logo}>
          <img src={Logo} alt="Logo SIOP" />
        </div>

        <div className={styles.container_form}>
          <div className={styles.container_content_title}>
            <h1>SIOP</h1>
            <p>Acesse com os dados fornecidos pelo administrador.</p>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
            <label htmlFor="email" className="mt-[1rem]">Login</label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="w-[100%]"
              value={loginData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="senha">Senha</label>
            <Input
              type="password"
              name="senha"
              placeholder="Senha"
              className="w-[100%]"
              value={loginData.senha}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="mt-[1.5rem]" value="Entrar" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
