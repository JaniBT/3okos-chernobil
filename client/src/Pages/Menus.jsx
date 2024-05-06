import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import MenuCard from "../components/MenuCard"
import "./Menus.css"

const Menus = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="menus-container">
        <header className="menus-home-link">
          <nav>
            <Link to="/">{t("nav_one")}</Link>
          </nav>
        </header>
        <h1>{t("menusHeading")}</h1>
        <p className="menusChoose">{t("menusChoose")}</p>
        <MenuCard />
        <p className="menuNote">{t("menuNote")}</p>
      </div>
    </>
  )
}

export default Menus
