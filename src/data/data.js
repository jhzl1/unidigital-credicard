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
        <a href="/">
          Ver en PDF
          <FilePdfOutlined style={{ color: "red" }} />
        </a>
      </Space>
    ),
  },
];

export const dataExample = [
  {
    key: "1",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "2",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "3",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "4",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
];
