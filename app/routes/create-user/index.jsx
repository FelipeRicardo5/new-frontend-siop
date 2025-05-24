// src/pages/DetailsCases.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Pencil } from "lucide-react";
import styles from './users.module.css';
import Input from "../../components/form/inputForm";
import Select from "../../components/form/select";

export default function CreateUser() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    nascimento: "",
    telefone: "",
    endereco: "",
    cargo: "Perito",
    cro: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    return (
    <>
    <h1 className={styles.title}>Criar usuário</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg grid grid-cols-2 gap-6 relative">
      {/* Coluna Esquerda */}
      <div className="flex flex-col gap-4">
        <Input label="Nome:" name="nome" value={form.nome} onChange={handleChange} type="text" />
        <Input label="CPF:" name="cpf" value={form.cpf} onChange={handleChange} type="text" />
        <Input label="Email:" name="email" value={form.email} onChange={handleChange} type="email" />
        <Input label="Senha:" name="senha" value={form.senha} onChange={handleChange} type="password" />

        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="font-semibold text-[#8c8c8c]">Foto de Perfil:</span>
          <div className="relative">
            <img
              src="https://via.placeholder.com/120x120?text=Foto"
              className="w-28 h-28 rounded-full text-center border-1 border-black object-cover grayscale"
              alt=""
            />
            <button
              className="absolute bottom-1 right-1 bg-[#0A4A81] text-white p-1 rounded-full shadow-md"
              title="Editar Foto"
            >
              <Pencil size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="flex flex-col gap-4">
        <Input label="Data de Nascimento:" name="nascimento" value={form.nascimento} onChange={handleChange} type="date" />
        <Input label="Telefone:" name="telefone" value={form.telefone} onChange={handleChange} type="text" />
        <Input label="Endereço:" name="endereco" value={form.endereco} onChange={handleChange} type="text" />

        <Select
          label="Cargo:"
          name="cargo"
          value={form.cargo}
          onChange={handleChange}
          options={["Perito", "Assistente", "Administrador"]}
        />

        <Input label="CRO (Perito):" name="cro" value={form.cro} onChange={handleChange} type="text" />

        <button
          className="mt-4 bg-[#0A4A81] hover:bg-[#072f52] text-white py-2 rounded-lg transition-colors"
          onClick={() => console.log("Formulário enviado:", form)}
        >
          Criar
        </button>
      </div>
    </div>
</>
  );
}