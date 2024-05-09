import { useTranslation } from "react-i18next"
import { Menus_Navbar } from "./Gallery"
import StoriesCard from "../components/StoriesCard"
import Footer from "../components/Footer"
import './Stories.css'

const Stories = () => {
    const { t } = useTranslation()


    return (
        <>
            <Menus_Navbar />
            <main className="stories-content">
                <div className="stories-title">
                    <h1>{t("storiesTitle")}</h1>
                    <div className="story-cards">
                        <StoriesCard aligning="right" cardTitle={t("storiesPripyat")} cardImage={undefined} cardImageAlter="Pripyat Card" />
                        <StoriesCard aligning="left" cardTitle={t("storiesChernobyl")} cardImage={undefined} cardImageAlter="Chernobyl Card" />
                        <StoriesCard aligning="right" cardTitle={t("storiesPowerPlant")} cardImage={undefined} cardImageAlter="Power Plant Card" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Stories