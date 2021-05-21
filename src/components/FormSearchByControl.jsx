import { Cascader, InputNumber, Table } from "antd";
import {
  columnsSearchByNumber,
  dataExample,
  dataSearchByNumber,
} from "../data/data";

const FormSearchByControl = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("funciona");
  };

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <form onSubmit={handleSubmit}>
        <Cascader
          options={dataSearchByNumber}
          placeholder="Seleccione un empresa"
          className="me-3 input-default"
        />

        <InputNumber
          min={1}
          placeholder="Introduzca número de documento"
          className="me-3 input-default"
        />

        <button className="btn btn-dark btn-sm">Buscar</button>
      </form>

      <Table
        columns={columnsSearchByNumber}
        dataSource={dataExample}
        className="mt-4 table"
        scroll={{ x: "max-content" }}
      />
    </>
  );
};

export default FormSearchByControl;
