import {
  columnsSearchByNumber,
  dataExample,
  dataSearchByNumber,
} from "../data/data";
import { Cascader, InputNumber, Table, DatePicker, Tooltip } from "antd";

const FormSearchByFiscalRegistry = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <form onSubmit={handleSubmit} className="d-flex flex-wrap form-control">
        <Cascader
          options={dataSearchByNumber}
          placeholder="Compañía"
          className="me-3 input-default"
        />
        <InputNumber
          min={1}
          max={10}
          placeholder="Introduzca RIF o cédula"
          className="me-3 input-default"
        />
        <Tooltip title="Fecha de emisión (Desde)" color={"#87d068"}>
          <DatePicker
            onChange={onChange}
            placeholder="Fecha emisión (Desde)"
            className="me-3 input-default"
          />
        </Tooltip>

        <DatePicker
          onChange={onChange}
          placeholder="Fecha emisión (Hasta)"
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

export default FormSearchByFiscalRegistry;
