import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io5";

export const linksHome = [
  {
    title: "Por número",
    icon: <AiIcons.AiOutlineFieldNumber />,
    path: "/documents/SearchByNumber",
  },
  {
    title: "Por número de control",
    icon: <ImIcons.ImListNumbered />,
    path: "/documents/SearchByControl",
  },
  {
    title: "Por RIF o cédula",
    icon: <HiIcons.HiIdentification />,
    path: "/documents/SearchByFiscalRegistry",
  },
  {
    title: "Por Tipo de Documento",
    icon: <IoIcons.IoDocuments />,
    path: "/documents/SearchByProduct",
  },
];
