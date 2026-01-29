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
      //"http://localhost:8080/api/empleados";
       "https://backend-recursosh.up.railway.app/api/empleados";
//"/api/empleados";
    await axios.post(urlBase, empleado);
    navegacion("/");
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "30px" }}>
      <div
        className="text-center"
        style={{
          marginBottom: "24px",
          padding: "15px 20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          borderRadius: "12px",
          backgroundColor: "#f8f9fa",
          fontWeight: "600",
        }}
      >
        <h3 style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.3)", margin: 0 }}>
          Agregar Empleado
        </h3>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
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

        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            value={departamento}
            onChange={onInputChange}
          />
        </div>

        <div
          className="mb-3"
          style={{
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "#ffffff",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            style={{ borderRadius: "8px" }}
          />

          <label htmlFor="telefono" className="form-label mt-3">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={onInputChange}
            style={{ borderRadius: "8px" }}
          />

          <label htmlFor="ciudad" className="form-label mt-3">
            Ciudad
          </label>
          <input
            type="text"
            className="form-control"
            id="ciudad"
            name="ciudad"
            value={ciudad}
            onChange={onInputChange}
            style={{ borderRadius: "8px" }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salario" className="form-label">
            Salario
          </label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="salario"
            name="salario"
            value={salario}
            onChange={onInputChange}
            style={{ borderRadius: "8px" }}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm me-3">
            Agregar
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}
