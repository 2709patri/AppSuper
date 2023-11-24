import React from 'react';

function ContadorItem({ contador, alSumar, alRestar, alBorrar }) {
  const { id, nombre, marca, cantidad } = contador;

  const handleSumar = () => {
    alSumar(id);
  };

  const handleRestar = () => {
    alRestar(id);
  };

  const handleBorrar = () => {
    alBorrar(id);
  };

  return (
    <li>
      <div>
        <span>{nombre}</span>
        {marca && <span> - {marca}</span>}
      </div>
      <div className="botones">
        <button onClick={handleSumar}>+</button>
        <span>{cantidad}</span>
        <button onClick={handleRestar}>-</button>
        <button onClick={handleBorrar}>x</button>
      </div>
    </li>
  );
}

export default ContadorItem;


