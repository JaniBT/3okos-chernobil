import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "./Travel.css"

const Travel = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="travel-body">
        <header className="inside-menus-wrapper">
          <nav>
            <Link to="/">{t("nav_one")}</Link>
            <Link to="/menus">{t("menu_text")}</Link>
          </nav>
        </header>
        <div className="travel-container">
          <h1 className="travel-main-heading">{t("visitChernobyl")}</h1>
          <p className="disclaimer">{t("disclaimer")}</p>
          <section className="disclaimer-section">
            <p>{t("disclaimer-section-first")}</p>
            <br />
            <p>{t("disclaimer-section-second")}</p>
          </section>
          <h2 className="travel-second-heading">{t("tour-informations")}</h2>
          <section className="travel-links">
            <a href="https://www.chernobyl-tour.com/english/">
              {t("tour-first-link")}
            </a>
          </section>
        </div>
      </div>
    </>
  )
}

export default Travel
