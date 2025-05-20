import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function EditarEmpleado() {
  const urlBase = "https://abundant-energy-production.up.railway.app/empleados";

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
    const cargarEmpleado = async () => {
      const resultado = await axios.get(`${urlBase}/${id}`);
      setEmpleado(resultado.data);
    };

    cargarEmpleado();
  }, [id, urlBase]);
  








  const onInputChange = (e) => {
    //spread operator ... (expandir los atributos)
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`, empleado);
    // Redirigimos a la pagina de inicio
    navegacion("/");
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Editar Empleado</h3>
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
