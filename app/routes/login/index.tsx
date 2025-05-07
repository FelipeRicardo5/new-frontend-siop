import type { Route } from './+types';
import styles from './login.module.css';
import Input from '../../components/form/input.jsx';
import Button from '../../components/form/button.jsx';
import Logo from '/LogoWhite.png'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "SIOP" },
    { name: "Sistema de Indentificação Odontológico Pericial", content: "Página de Login para acessar o sistema" },
  ];
}


export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <div className={styles.container_logo}>
          <img src={Logo} />
        </div>

        <div className={styles.container_form}>
          <div className={styles.container_content}>
            <h1>SIOP</h1>
            <p>acesse o sistema com os dados fornecidos pelo administrador</p>
            <form className={styles.form}>
              <label htmlFor="login" class="mt-[1rem]" >Login</label>
              <Input type="text" name="login" placeholder="Login" className={"w-[100%]"} required />
              <label htmlFor="password" class="items-start" >Password</label>
              <Input type="password" name="password" placeholder="Senha" className={"w-[100%]"} required />
              <Button type="submit" className={styles.button} value={"Entrar"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}