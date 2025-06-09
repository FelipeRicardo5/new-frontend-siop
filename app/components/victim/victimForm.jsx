import React from 'react';
import Input from '../../components/form/inputForm'; // ajuste o caminho conforme seu projeto

export default function VictimForm() {
  return (
    <div className="form">
      <Input type="text" label="NIC:" value="985654321" readOnly />
      <Input type="text" label="Nome:" value="Fulaninha de tal" readOnly />
      <Input type="text" label="Sexo da Vítima:" value="Feminino" readOnly />
      <Input type="text" label="Cor/Etnia:" value="Branca" readOnly />
      <Input type="text" label="Documento:" value="RG ou CPF" readOnly />
      <Input type="text" label="Data de Nascimento:" value="23/05/1980" readOnly />
      <Input type="text" label="Endereço:" value="IML" readOnly />
    </div>
  );
}
