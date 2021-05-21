import { Cascader, Tooltip, DatePicker, Table } from "antd";
import { dataSearchByNumber, typeOfDocument } from "../data/data";

const FormSearchByProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h4>Parámetros de búsqueda</h4>

      <form onSubmit={handleSubmit}>
        <Cascader
          options={dataSearchByNumber}
          placeholder="Compañía"
          className="me-3 input-default"
        />
        <Cascader
          options={typeOfDocument}
          placeholder="Tipo de documento"
          className="me-3 input-default"
        />
        <Tooltip title="Fecha de emisión (Desde)" color={"#87d068"}>
          <DatePicker
            placeholder="Fecha emisión (Desde)"
            className="me-3 input-default"
          />
        </Tooltip>

        <DatePicker
          placeholder="Fecha emisión (Hasta)"
          className="me-3 input-default"
        />

        <button className="btn btn-dark btn-sm">Buscar</button>
      </form>
    </>
  );
};

export default FormSearchByProduct;
