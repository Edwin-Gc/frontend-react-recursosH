import EditarEmpleado from "./Empleados/EditarEmpleados";
import AgregarEmpleado from "./Empleados/AgregarEmpleados";
import ListadoEmpleados from "./Empleados/ListadoEmpleados";
import Navegacion from "./Compartida/Navegacion";



import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />} />
          <Route exact path="/agregar" element={<AgregarEmpleado />} />
          <Route exact path="/editar/:id" element={<EditarEmpleado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
