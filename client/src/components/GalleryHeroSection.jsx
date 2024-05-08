import { useTranslation } from "react-i18next"
import { BurningReactor } from "../assets/images/images"

const GalleryHeroSection = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="gallery-main-hero">
                <div className="hero-text hero-height">
                    <h1>{t("GalleryMainTitle")}</h1>
                </div>
                <div className="hero-sm-picture hero-height">
                </div>
                <div className="hero-horizontal hero-height">Szia</div>
                <div className="hero-vertical hero-height">Szia</div>
            </div>
        </>
    )
}

export default GalleryHeroSection