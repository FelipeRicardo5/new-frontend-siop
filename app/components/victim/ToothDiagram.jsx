import React from 'react';
import teethImage from '../assets/tooth-diagram.png'; 
import './ToothDiagram.module.css'// Salve essa parte da imagem

export default function ToothDiagram() {
  return (
    <div>
      <img src={teethImage} alt="Diagrama dentário" style={{ maxWidth: '100%' }} />
    </div>
  );
}
