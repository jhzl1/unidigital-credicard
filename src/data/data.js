import { Space } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";

export const dataSearchByNumber = [
  {
    value: "credicard",
    label: "Credicard",
  },
];

export const columnsSearchByNumber = [
  {
    title: "Tipo",
    dataIndex: "tipe",
    key: "tipe",
  },
  {
    title: "Serie",
    dataIndex: "serie",
    key: "serie",
  },
  {
    title: "N° Documento",
    dataIndex: "numberDoc",
    key: "numberDoc",
  },
  {
    title: "N° Control",
    dataIndex: "numberControl",
    key: "numberControl",
  },
  {
    title: "Fecha",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Cliente",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },

  {
    title: "Acción",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a href="#">
          Ver en PDF
          <FilePdfOutlined style={{ color: "red" }} />
        </a>
      </Space>
    ),
  },
];
