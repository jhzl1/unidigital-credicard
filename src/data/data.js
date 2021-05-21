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
  {
    key: "5",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "6",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "7",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "8",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "9",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "10",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "11",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "12",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "13",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "14",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
];

export const columnsBatchList = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Archivo",
    dataIndex: "file",
    key: "file",
  },
  {
    title: "Fecha",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "N° Control Min",
    dataIndex: "numberMinControl",
    key: "numberMinControl",
  },
  {
    title: "N° Control Max",
    dataIndex: "numberMaxControl",
    key: "numberMaxControl",
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

export const dataExampleBatchList = [
  {
    key: "1",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "2",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "3",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "4",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "5",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "6",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
];

export const typeOfDocument = [
  {
    value: "valor1",
    label: "Factura",
  },
  {
    value: "valor2",
    label: "Nota de Crédito",
  },
  {
    value: "valor3",
    label: "Nota de Débito",
  },
];
