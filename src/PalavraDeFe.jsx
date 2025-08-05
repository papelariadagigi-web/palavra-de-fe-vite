
import React, { useState } from 'react';
import palavras from './mock';

function PalavraDeFe() {
  const [mensagem, setMensagem] = useState("Clique no botão e receba uma palavra de fé!");

  function gerarPalavra() {
    const aleatorio = Math.floor(Math.random() * palavras.length);
    setMensagem(palavras[aleatorio]);
  }

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={gerarPalavra}>Nova Palavra</button>
    </div>
  );
}

export default PalavraDeFe;
