import { useState } from 'react';

function ContadorForm({ alAgregar }) {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');

  const handleNombreChange = event => {
    setNombre(event.target.value);
  };

  const handleMarcaChange = event => {
    setMarca(event.target.value);
  };

  const agregar = evento => {
    if (nombre.trim() !== '') {
      alAgregar({
        nombre,
        marca,
        cantidad: 0, // Agregamos cantidad con valor inicial 0 al agregar un nuevo ítem
      });
      setNombre('');
      setMarca('');
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
          placeholder="Marca"
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ContadorForm;
