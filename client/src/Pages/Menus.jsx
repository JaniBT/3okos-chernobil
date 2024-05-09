import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuCard from "../components/MenuCard";
import "./Menus.css";

const Menus = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="menus-body">
        <div className="menus-container">
          <header className="menus-home-link">
            <nav>
              <Link to="/" className="menus-link">{t("nav_one")}</Link>
            </nav>
          </header>
          <h1>{t("menusHeading")}</h1>
          <p className="menusChoose">{t("menusChoose")}</p>
          <section className="menuSection">
            <MenuCard
              link="/menus/gallery"
              innerLink="/gallery"
              title={t("menuGallery")}
            />
            <MenuCard
              link="/menus/stories"
              innerLink="/stories"
              title={t("menuStories")}
            />
            <MenuCard
              link="/menus/travel"
              innerLink="/travel"
              title={t("menuTravel")}
            />
            <MenuCard
              link="/menus/thoughts"
              innerLink="/thoughts"
              title={t("menuThoughts")}
            />
            <MenuCard
              link="/menus/places"
              innerLink="/places"
              title={t("menuPlaces")}
            />
            <MenuCard link="https://www.hbo.com/chernobyl" innerLink="/hbo" title={t("menuHBO")} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Menus;
