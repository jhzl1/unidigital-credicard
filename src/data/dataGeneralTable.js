import { Tag, Button } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import moment from "moment";
import { getDocument } from "../services/getDocument";

const transformNumber = (number) => {
  let decimal = number.search(",");
  let result = number.substring(0, decimal + 3);
  return result;
};

export const columnsGeneral = [
  {
    title: "N° Documento",
    dataIndex: "number",
    key: "number",
    render: (text) => (
      <Tag color="#2db7f5">
        <span className="fw-bold">{text}</span>
      </Tag>
    ),
  },
  {
    title: "N° Control",
    dataIndex: "control",
    key: "control",
    render: (text) => (
      <Tag color="#f50">
        <span className="fw-bold">{text}</span>
      </Tag>
    ),
  },
  {
    title: "Fecha",
    dataIndex: "emissionDate",
    align: "center",
    key: "emissionDate",
    render: (text) => <span>{moment(text.slice(0, 10)).format("L")}</span>,
  },
  {
    title: "Cliente",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Moneda",
    dataIndex: "currency",
    align: "center",
    key: "currency",
  },
  {
    title: "Total",
    dataIndex: "total",
    align: "center",
    key: "total",
    render: (number) => (
      <span className="fst-italic">
        {number.charAt(0) === "$" ? transformNumber(number) : number}
      </span>
    ),
  },

  {
    title: "Acción",
    align: "center",
    key: "action",
    render: (text, record) => (
      <Button
        type="primary"
        danger
        onClick={() => getDocument(record.strongId)}
      >
        Ver en PDF
        <FilePdfOutlined />
      </Button>
    ),
  },
];
