import ContadorItem from './ContadorItem';

function ContadorList({ contadores, alSumar, alRestar, alBorrar }) {
  return (
    <ul>
      {contadores.map(contador => (
        <ContadorItem
          key={contador.id}
          contador={contador}
          alSumar={alSumar}
          alRestar={alRestar}
          alBorrar={alBorrar}
        />
      ))}
    </ul>
  );
}

export default ContadorList;

