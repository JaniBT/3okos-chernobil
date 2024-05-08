import React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  
  const getFullYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>{t("footerMain")}</p>
      <p> <span>{getFullYear}</span> &copy; {t("footerRights")}</p>
    </footer>
  )
}

export default Footer
