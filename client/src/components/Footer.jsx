import React from "react";
import { useTranslation } from "react-i18next";

const Footer = (props) =>{
    const { t } = useTranslation();

    return(
    <footer className="footer">
        <p>{t("footerMain")}</p>
        <p>  &copy; {t("footerRights")}</p>
    </footer>
    )
}

export default Footer