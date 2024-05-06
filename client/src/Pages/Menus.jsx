// import { useState } from "react";
import { useTranslation } from "react-i18next";

const Menus = () => {

    const { t } = useTranslation();

    return(
    <>
        <div className="menus-container">
            <h1>{t("menusHeading")}</h1>
        </div>
    </>
    );
}

export default Menus