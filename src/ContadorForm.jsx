// ContadorForm.js
import React, { useState } from 'react';

function ContadorForm({ alAgregar }) {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [unidad, setUnidad] = useState('unidad'); 

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
  };

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const handleUnidadChange = (event) => {
    setUnidad(event.target.value);
  };

  const agregar = (evento) => {
    if (nombre.trim() !== '') {
      alAgregar({
        nombre,
        marca,
        cantidad,
        unidad,
      });
      setNombre('');
      setMarca('');
      setCantidad(0);
      setUnidad('unidad');
    }
    evento.preventDefault();
  };

  return (
    <form onSubmit={agregar}>
      <div>
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          type="text"
          value={marca}
          onChange={handleMarcaChange}
          placeholder="Característica o Marca"
        />
      </div>
      <div>
        <label>
          Cantidad:
          <input
            type="number"
            value={cantidad}
            onChange={handleCantidadChange}
            placeholder="Cantidad"
          />
        </label>
        <select value={unidad} onChange={handleUnidadChange}>
          <option value="unidad">Unidad</option>
          <option value="kilo">Kg.</option>
          <option value="litro">Lt.</option>
        </select>
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ContadorForm;
