import Error from "../assets/img/error.png";

const NotFound = () => {
  return (
    <div className="container p-4 d-flex flex-row">
      <img src={Error} alt="" style={{ width: "100px" }} className="me-4" />
      <div>
        <h2>¡Ups!</h2>
        <span className="fs-5">
          La página que intentas buscar no existe. Da click aquí para regresar
          atrás
        </span>
      </div>
    </div>
  );
};

export default NotFound;
