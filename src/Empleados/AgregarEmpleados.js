import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgregarEmpleado() {
  let navegacion = useNavigate();
  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    email: "",
    telefono: "",
    ciudad: "",
    salario: "",
  });

  const { nombre, departamento, email, telefono, ciudad, salario } = empleado;

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase =
      "https://abundant-energy-production.up.railway.app/empleados";

    await axios.post(urlBase, empleado);
    navegacion("/");
  };
 


  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
  
          {/* Caja del título */}
          <div className="bg-white shadow p-3 mb-4 rounded text-center">
            <h2 className="fw-bold m-0">Agregar Empleado</h2>
          </div>
  
          {/* Formulario */}
          <form onSubmit={onSubmit}>
            {/* Campo: Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                required
                value={nombre}
                onChange={onInputChange}
              />
            </div>
  
            {/* Campo: Departamento */}
            <div className="mb-3">
              <label htmlFor="departamento" className="form-label">Departamento</label>
              <input
                type="text"
                className="form-control"
                id="departamento"
                name="departamento"
                value={departamento}
                onChange={onInputChange}
              />
            </div>
  
            {/* Caja con Email, Teléfono, Ciudad */}
            <div className="bg-white shadow-sm p-3 mb-3 rounded">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  value={telefono}
                  onChange={onInputChange}
                />
              </div>
  
              <div className="mb-0">
                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudad"
                  name="ciudad"
                  value={ciudad}
                  onChange={onInputChange}
                />
              </div>
            </div>
  
            {/* Campo: Salario */}
            <div className="mb-4">
              <label htmlFor="salario" className="form-label">Salario</label>
              <input
                type="number"
                step="any"
                className="form-control"
                id="salario"
                name="salario"
                value={salario}
                onChange={onInputChange}
              />
            </div>
  
            {/* Botones */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary me-2">Agregar</button>
              <a href="/" className="btn btn-danger">Regresar</a>
            </div>
          </form>
  
        </div>
      </div>
    </div>
  );
}  