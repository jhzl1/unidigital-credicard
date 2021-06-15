import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as GrIcons from "react-icons/gr";

export const dataMenu = [
  {
    id: 1,
    name: "Documentos",
    icon: <IoIcons.IoDocuments />,
    items: [
      {
        name: "Número de documento",
        path: "/documents/SearchByNumber",
      },
      {
        name: "Número de control",
        path: "/documents/SearchByControl",
      },
      {
        name: "RIF o Cédula",
        path: "/documents/SearchByFiscalRegistry",
      },
      {
        name: "Tipo de Documento",
        path: "/documents/SearchByProduct",
      },
    ],
  },
  {
    id: 2,
    name: "Ciclos",
    icon: <GrIcons.GrCycle />,
    items: [
      {
        name: "Listas",
        path: "/BatchList",
      },
    ],
  },
  {
    id: 3,
    name: "Indicadores",
    icon: <IoIcons.IoStatsChart />,
    items: [
      { name: "Por Archivo / Oficina", path: "/statistics/SearchBatchs" },
    ],
  },
  {
    id: 4,
    name: "Libros",
    icon: <FaIcons.FaBook />,
    items: [{ name: "Buscar", path: "/SearchBook" }],
  },
  {
    id: 5,
    name: "Administración",
    icon: <GrIcons.GrUserAdmin />,
    items: [{ name: "Usuarios", path: "/admin" }],
  },
];
