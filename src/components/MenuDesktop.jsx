import { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  UserOutlined,
  FundOutlined,
  ReadOutlined,
  FileOutlined,
  BarChartOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import LogoTransparent from "../assets/img/unidigital-logo-color.png";

const MenuDesktop = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <ProSidebar
      collapsed={toggle}
      className="d-none d-sm-none d-md-none d-lg-block"
    >
      <Link to="/home">
        <img
          src={LogoTransparent}
          alt=""
          style={{ width: "50px" }}
          className="logo-menu"
        />
      </Link>
      <Menu iconShape="square" style={{ minHeight: "100vh" }}>
        <SubMenu icon={<FileOutlined />} title="Documentos" className="submenu">
          <MenuItem>
            <Link to="/documents/SearchByNumber">Número de documento</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/documents/SearchByControl">Número de control</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/documents/SearchByFiscalRegistry">RIF o cédula</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/documents/SearchByProduct">Tipo de Documento</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<FundOutlined />} title="Ciclos">
          <MenuItem>
            <Link to="/BatchList">Listas</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<BarChartOutlined />} title="Indicadores">
          <MenuItem>
            <Link to="/statistics/SearchBatchs" className="bm-item-list">
              Por Archivo / Oficina
            </Link>
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<ReadOutlined />} title="Libros">
          <MenuItem>
            <Link to="/SearchBook">Buscar</Link>
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<UserOutlined />} title="Administración">
          <MenuItem>
            <Link to="/Admin">Usuarios</Link>
          </MenuItem>
        </SubMenu>
      </Menu>

      <div
        className="d-flex justify-content-center trigger-menu "
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <RightOutlined /> : <LeftOutlined />}
      </div>
    </ProSidebar>
  );
};

export default MenuDesktop;
