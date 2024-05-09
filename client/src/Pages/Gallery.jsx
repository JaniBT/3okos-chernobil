import { HiArrowNarrowDown } from "react-icons/hi"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import './Gallery.css'
import GalleryHeroSection from "../components/GalleryHeroSection"
import Footer from "../components/Footer"
import GalleryImages from "../components/GalleryImages"

const Gallery = () => {
    const { t } = useTranslation()

    const handleClick = () => {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <header className="inside-menus-wrapper">
                <nav>
                    <Link to="/">{t("nav_one")}</Link>
                    <Link to="/menus">{t("menu_text")}</Link>
                </nav>
            </header>
            <main className="gallery-main-content">
                <GalleryHeroSection />
                <HiArrowNarrowDown className="arrow_down_gallery" />
                <Link className="gallery-view-btn" onClick={handleClick}>{t("viewGalleryButton")}</Link>
                <div className="image-gallery">
                    <div className="all-images">
                        <GalleryImages />
                        <h2 id="gallery" className="under-text">
                            {t("galleryViewText")}
                        </h2>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Gallery