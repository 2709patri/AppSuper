//contenedor ContenedorForm
import React, { useState } from 'react';

function ContadorForm({ alAgregar }) {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [unidad, setUnidad] = useState('unidad'); // Unidad predeterminada

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
  };

  const handleUnidadChange = (event) => {
    setUnidad(event.target.value);
  };

  const agregar = (evento) => {
    if (nombre.trim() !== '') {
      alAgregar({
        nombre,
        marca,
        unidad,
        cantidad: 0, // Cantidad inicial en 0
      });
      setNombre('');
      setMarca('');
      setUnidad('unidad'); // Restablecer la unidad predeterminada
    }
    evento.preventDefault();
  };

  return (
    <form onSubmit={agregar}>
      <div>
        <input type="text" value={nombre} onChange={handleNombreChange} placeholder="Nombre" />
      </div>
      <div>
        <input type="text" value={marca} onChange={handleMarcaChange} placeholder="Marca" />
      </div>
      <div>
        <select value={unidad} onChange={handleUnidadChange}>
          <option value="unidad">Unidad</option>
          <option value="kilo">Kilo</option>
          <option value="litro">Litro</option>
        </select>
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ContadorForm;