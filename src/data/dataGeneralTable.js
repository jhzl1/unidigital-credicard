import { Tag, Button } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import { getDocument } from "../services/api";
import moment from "moment";

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
    key: "currency",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (number) => (
      <span
        className="fw-bold"
        onClick={() =>
          console.log(parseInt(number.slice(1).toLocaleString("fr-FR")))
        }
      >
        {number.charAt(0) === "$"
          ? number.slice(1).toLocaleString("fr-FR")
          : number}
      </span>
    ),
  },

  {
    title: "Acción",
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
