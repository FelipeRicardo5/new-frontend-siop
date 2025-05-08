import type { Route } from './+types';
import styles from './login.module.css';
import Input from '../../components/form/input.jsx';
import Button from '../../components/form/button.jsx';
import Logo from '/LogoWhite.png'
import { Link } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "SIOP" },
    { name: "Sistema de Indentificação Odontológico Pericial", content: "Página de Login para acessar o sistema" },
  ];
}


export default function Login() {

  const notify = () => toast("Wow so easy!");

  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <div className={styles.container_logo}>
          <img src={Logo} />
        </div>

        <div className={styles.container_form}>
          <div className={styles.container_content_title} >
            <h1>SIOP</h1>
            <p>acesse com os dados fornecidos pelo administrador.</p>
          </div>
          <form className={styles.form}>
            <label htmlFor="login" className="mt-[1rem]" >Login</label>
            <Input type="text" name="login" placeholder="Login" className={"w-[100%]"} required />
            <label htmlFor="password" className="items-start" >Password</label>
            <Input type="password" name="password" placeholder="Senha" className={"w-[100%]"} required />
            <Link to={"/cases"} >
              <Button type="submit" className={"mt-[1.5rem]"} value={"Entrar"} onClick={notify}/>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}