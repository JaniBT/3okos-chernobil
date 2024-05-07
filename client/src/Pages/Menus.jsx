import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import MenuCard from "../components/MenuCard"
import "./Menus.css"

const Menus = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="menus-body">
          <div className="menus-container">
            <header className="menus-home-link">
              <nav>
                <Link to="/">{t("nav_one")}</Link>
              </nav>
            </header>
            <h1>{t("menusHeading")}</h1>
            <p className="menusChoose">{t("menusChoose")}</p>
            <section className="menuSection">
                <MenuCard link="/gallery" title={t("menuGallery")}/>
                <MenuCard link="/stories" title={t("menuStories")}/>
                <MenuCard link="/travel" title={t("menuTravel")}/>
                <MenuCard link="/thoughts" title={t("menuThoughts")}/>
                <MenuCard link="/places" title={t("menuPlaces")}/>
                <MenuCard link="/hbo" title={t("menuHBO")}/>
            </section>
            <p className="menuNote">{t("menuNote")}</p>
          </div>
      </div>
    </>
  )
}

export default Menus
