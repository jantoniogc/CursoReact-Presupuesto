import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, actualizarPregunta}) => {

    //Definir State
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    // Función que lee el presupuesto
    const definierPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    }
    // Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        // Si pasamos Validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        actualizarPregunta(false);

    }



    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"></Error> : ''}
            <form
            onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definierPresupuesto}>
                </input>
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto">
                </input>
            </form>
        </Fragment>
    );
}

export default Pregunta;