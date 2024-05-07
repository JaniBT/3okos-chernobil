import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Menu = (props) => {
  const { t } = useTranslation();

  return (
      <div className="menuCards">
        <div className="menuCard">
          <h2 className="cardLink">
            <Link to={props.link}>{props.title}</Link>
          </h2>
        </div>
      </div>
  );
};

export default Menu;
