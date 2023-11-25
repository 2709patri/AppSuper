// ContadorItem.js
import React from 'react';

function ContadorItem({ contador, alSumar, alRestar, alBorrar }) {
  const { id, nombre, marca, cantidad, unidad } = contador;

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
        {cantidad > 0 && <span> - {cantidad} {unidad}</span>}
      </div>
      <div className="botones">
        <span>{cantidad} {unidad}</span>
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        <button onClick={handleBorrar}>x</button>
      </div>
    </li>
  );
}

export default ContadorItem;

