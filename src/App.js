import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';




function App() {


  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState(0);
  const [creargasto, setCreargasto] = useState(false)

  useEffect(() => {
    if (creargasto) {
      setGastos([
        ...gastos,
        gasto
      ]);
      setCreargasto(false);
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante)

    }
  }, [gasto, creargasto, gastos, restante])
  


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            mostrarpregunta ?
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                actualizarPregunta={actualizarPregunta}></Pregunta>
              :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCreargasto={setCreargasto}></Formulario>
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  ></Listado>
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  ></ControlPresupuesto>
                </div>
              </div>
          }
        </div>

      </header>
    </div>
  );
}

export default App;
