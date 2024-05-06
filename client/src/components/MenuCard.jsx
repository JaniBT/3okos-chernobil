import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Menu = () => {
  const { t } = useTranslation()

  return (
    <div>
      <section className="menuSection">
        <div className="menuCards">
          <div className="menuCard">
            <h2 className="cardLink">
              <Link to="/">{t("menuGallery")}</Link>
            </h2>
          </div>
          <div className="menuCard">
            <h2 className="cardLink">
              <Link to="/">{t("menuStories")}</Link>
            </h2>
          </div>
          <div className="menuCard">
            <h2 className="cardLink">
              <Link to="/">{t("menuTravel")}</Link>
            </h2>
          </div>
        </div>
      </section>

      <section className="menuSection">
        <div className="menuCards">
          <div className="menuCard">
            <h2 className="cardLink">
              <Link to="/">{t("menuThoughts")}</Link>
            </h2>
          </div>
          <div className="menuCard">
            <h2 className="cardLink">
              <Link to="/">{t("menuPlaces")}</Link>
            </h2>
          </div>
          <div className="menuCard">
            <h2 className="cardLink">
              <Link to="/">{t("menuHBO")}</Link>
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
