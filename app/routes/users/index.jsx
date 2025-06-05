import React, { useState } from "react";
import { useTheme } from "../../providers/themeContext";
import { UserRoundSearch, Handshake, Wrench, Trash } from "lucide-react";
import styles from "./users.module.css"; // Importe o arquivo CSS Module
import { useNavigate } from "react-router";

const Users = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    identificacao: "",
    nomeCaso: "",
    responsavel: "",
    local: "",
    descricao: "",
    data: "",
    hora: "",
    corPele: "",
    sexoVitima: "",
    causaMorte: "",
    identificado: "", // 'Sim' ou 'Não'
    // Adicione aqui os estados para os campos de evidência se necessário
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const adicionarEvidencia = () => {
    navigate("/evidencie");
    console.log("Adicionar Evidência");
  };

  const criarCaso = () => {
    // Implemente a lógica para criar o caso
    console.log("Criar Caso:", form);
  };

  return (
    <div className={`flex flex-col`}>
      <h1 className={styles.title}>Gerenciar usuários</h1>
      <div className={`flex flex-col items-end`}>
        <button type="button" className={styles.button}>
          <a href="#">Criar usuário</a>
        </button>
      </div>
      <div className={styles.user_container}>
        <div className={styles.user_box}>
          <a className={styles.text_link} href="#">
            Ver detalhes
          </a>
          <p>Nome: Júlia martins</p>
          <small>CRO-SP: 12345</small>
          <span className={styles.trash}>
            <Trash color="#999999" size={23} />
          </span>
          <img src="/iconTeste.png" width="105px" height="105px"></img>
          <div className={styles.role}>
            <UserRoundSearch size={17} />
            Perito
          </div>
        </div>
        <div className={styles.user_box}>
          <a className={styles.text_link} href="#">
            Ver detalhes
          </a>

          <p>Nome: Thayza Vitória</p>
          <small>CPF: 123.456.789-10</small>
          <span className={styles.trash}>
            <Trash color="#999999" size={23} />
          </span>
          <img src="/iconTeste.png" width="105px" height="105px"></img>
          <div className={styles.role}>
            <Handshake size={17} />
            Assistente
          </div>
        </div>
        <div className={styles.user_box}>
          <a className={styles.text_link} href="#">
            Ver detalhes
          </a>

          <p>Nome: Júlia martins</p>
          <small>CPF: 123.456.789-10</small>
          <span className={styles.trash}>
            <Trash color="#999999" size={23} />
          </span>
          <img src="/iconTeste.png" width="105px" height="105px"></img>
          <div className={styles.role}>
            <Wrench size={17} />
            Admin
          </div>
        </div>
        {/* <div className={styles.user_box}>
          <a className={styles.text_link} href="#">
            Ver detalhes
          </a>

          <p>Nome: Júlia martins</p>
        </div> */}
      </div>
    </div>
  );
};

export default Users;
