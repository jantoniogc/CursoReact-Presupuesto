import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({ setGasto, setCreargasto }) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    // contruir Gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    /// pasar el gasto al componente principal
    setGasto(gasto);
    setCreargasto(true);

    // resetear el form
    setNombre('');
    setCantidad(0);
  }

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agregar tus gastos aquí</h2>
      {(error) ? <Error mensaje="Ambos campos son obligatorios"></Error>
        : null
      }
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => setNombre(e.target.value)}
          value={nombre}>
        </input>
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 3000"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value, 10))}>
        </input>
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto">
      </input>
    </form>
  );
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCreargasto: PropTypes.func.isRequired
}

export default Formulario;