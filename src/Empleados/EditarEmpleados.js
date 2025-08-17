import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarEmpleado() {
  const urlBase =
    "https://sistemarecursosh-88fb142a553e.herokuapp.com/api/empleados";

  let navegacion = useNavigate();
  const { id } = useParams();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    email: "",
    telefono: "",
    ciudad: "",
    salario: "",
  });

  const { nombre, departamento, email, telefono, ciudad, salario } = empleado;

  useEffect(() => {
    cargarEmpleado();
  }, []);

  const cargarEmpleado = async () => {
    const resultado = await axios.get(`${urlBase}/${id}`);
    setEmpleado(resultado.data);
  };

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`, empleado);
    navegacion("/");
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "600px",
        marginTop: "30px",
        marginBottom: "30px",
        padding: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        borderRadius: "12px",
        backgroundColor: "#fff",
      }}
    >
      <div className="container text-center" style={{ marginBottom: "30px" }}>
        <h3 style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.3)", margin: 0 }}>
          Editar Empleado
        </h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required={true}
            value={nombre}
            onChange={(e) => onInputChange(e)}
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
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div
          style={{
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            marginBottom: "20px",
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ciudad" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="ciudad"
              name="ciudad"
              value={ciudad}
              onChange={(e) => onInputChange(e)}
            />
          </div>
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
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">
            Guardar
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}
