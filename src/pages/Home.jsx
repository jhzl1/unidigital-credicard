import { Breadcrumb } from "antd";
import { loginApi } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "/user/login";

  return (
    <div className="my-5 p-4 desktop-container">
      <Breadcrumb className="mb-3">
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <h1>Digital Invoice</h1>
        <h3>Visor de Documentos Fiscales</h3>
        <p>
          Genera en formato PDF y XML los Documentos Fiscales de tu empresa,
          realiza búsqueda por Cédula/Rif, Tipo de Documento y Fechas. También
          puedes generar los Libros de Ventas
        </p>

        <button className="btn-primary" onClick={() => loginApi(url)}>
          Prueba
        </button>
        <span className="fs-4 mt-5">Accesos rápidos</span>
        <div className="d-flex flex-row">
          <Link
            to="/documents/SearchByNumber"
            className="m-3 p-4 fs-4 w-25 links-home"
            id="first-link"
          >
            Buscar documentos por número
          </Link>
          <Link
            to="/documents/SearchByControl"
            className="m-3 p-4 fs-4 w-25 links-home "
            id="second-link"
          >
            Buscar documentos por número de control
          </Link>
          <Link
            to="/documents/SearchByFiscalRegistry"
            className="m-3 p-4 fs-4 w-25 links-home"
            id="third-link"
          >
            Buscar documentos por RIF o cédula
          </Link>
          <Link
            to="/documents/SearchByProduct"
            className="m-3 p-4 fs-4 w-25 links-home"
            id="fourth-link"
          >
            Buscar por Tipo de Documento
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
