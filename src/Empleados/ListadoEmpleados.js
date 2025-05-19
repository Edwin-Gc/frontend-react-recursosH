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
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>SRH EdwinDevOps</h3>
      </div>

      <table className="table table-success table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Salario</th>
            <th scope="col">Asistencia</th>

            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            //iteramos arreglo de empleados
            empleados.map((empleado, indice) => (
              <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
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
                  <div>
                    <Link
                      to={`/editar/${empleado.idEmpleado}`}
                      className="btn btn-warning btn-sm me-3"
                    >
                      Editar
                    </Link>

                    <button
                      onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                      className="btn btn-danger btn-sm"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
