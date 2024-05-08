import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Menu = (props) => {
  const { t } = useTranslation();

  return (
      <Link to={props.link} className="menuCards">
        <div className="menuCard">
          <h2 className="cardLink">
            <span>{props.title}</span>
          </h2>
        </div>
      </Link>
  );
};

export default Menu;
