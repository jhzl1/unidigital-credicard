import React from "react";
import CredicardLogo from "../assets/img/credicard_logo2.png";

const HeaderDesktop = () => {
  return (
    <div className="m-3 px-4 container d-flex flex-row justify-content-between prueba header-desktop">
      <div className="align-self-start prueba">
        <img src={CredicardLogo} height="50" width="160" alt="Credicard" />
      </div>

      <div className="align-self-start prueba p-3">
        <h6>Usuario: omarcampos@unidigital.global</h6>
      </div>

      <div>ffjifji</div>
    </div>
  );
};

export default HeaderDesktop;
