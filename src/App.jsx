// App.js
import React, { useState } from 'react';
import ContadorForm from './ContadorForm';
import ContadorList from './ContadorList';
import './App.css';

const datoIniciales = [];

function App() {
  const [proximoID, setProximoID] = useState(4);
  const [contadores, setContadores] = useState(datoIniciales);

  function agregar(item) {
    setContadores(prevContadores => [...prevContadores, { id: proximoID, ...item }]);
    setProximoID(id => id + 1);
  }

  function sumar(id) {
    const actual = contadores.find(contador => contador.id === id);
    const nuevo = { ...actual, cantidad: actual.cantidad + 1 };
    const nuevos = contadores.map(contador => (contador.id === id ? nuevo : contador));
    setContadores(nuevos);
  }

  function restar(id) {
    const actual = contadores.find(contador => contador.id === id);
    const nuevo = { ...actual, cantidad: actual.cantidad - 1 };
    const nuevos = contadores.map(contador => (contador.id === id ? nuevo : contador));
    setContadores(nuevos);
  }

  function borrar(id) {
    const borrados = contadores.filter(contador => contador.id !== id);
    setContadores(borrados);
  }

  return (
    <main>
      <h1>LA LISTA DEL SUPER</h1>
      <ContadorForm alAgregar={agregar} />
      <ContadorList contadores={contadores} alSumar={sumar} alRestar={restar} alBorrar={borrar} />
    </main>
  );
}

export default App;
