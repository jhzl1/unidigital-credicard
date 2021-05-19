import { slide as Menu } from "react-burger-menu";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { useState } from "react";
import LogoTransparent from "../assets/img/unidigital-logo-color.png";
import { Link } from "react-router-dom";

const MenuResponsive = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Menu
      isOpen={false}
      onStateChange={() => setIsOpen(!isOpen)}
      customBurgerIcon={<Burger isOpen={isOpen} />}
    >
      <Link to="/home">
        <img
          src={LogoTransparent}
          alt="Unigital"
          style={{ width: "50px" }}
          className="my-2"
        />
      </Link>

      <div>
        <span>Buscar documento</span>
        <ul>
          <li className="menu-item">bhhhh</li>
        </ul>
      </div>
      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  );
};

export default MenuResponsive;
