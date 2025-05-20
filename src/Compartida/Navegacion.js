import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navegacion.css";

export default function Navegacion() {
  const location = useLocation();

  return (
    <div className="container my-3">
      <nav className="navbar navbar-expand-lg bg-primary nav-custom">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <a className="navbar-brand text-white" href="/">
              Recursos Humanos
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/agregar" ? "active" : ""
                  }`}
                  to="/agregar"
                >
                  Agregar Empleado
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
