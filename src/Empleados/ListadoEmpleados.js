import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function ListadoEmpleados() {
  

  const urlBase = "https://abundant-energy-production.up.railway.app/empleados";


  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Resultado cargar empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  };

  const eliminarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  };
  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h3>SRH EdwinDevOps</h3>
      </div>

      <table className="table table-success table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Salario</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, indice) => (
            <tr key={indice}>
              <th scope="row" className="text-center">
                {empleado.idEmpleado}
              </th>
              <td>{empleado.nombre}</td>
              <td>{empleado.departamento}</td>
              <td>{empleado.email}</td>
              <td>{empleado.telefono}</td>
              <td>{empleado.ciudad}</td>
              <td>
                <NumericFormat
                  value={empleado.salario}
                  displayType={"text"}
                  thousandSeparator={","}
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </td>
              <td className="text-center">
                <Link
                  to={`/editar/${empleado.idEmpleado}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
