import { useTranslation } from "react-i18next"
import { Menus_Navbar } from "./Gallery"
import StoriesCard from "../components/StoriesCard"
import Footer from "../components/Footer"
import "./Stories.css"

import pripyatImage from "../assets/images/pripyat.jpg"
import chernobylImage from "../assets/images/chernobyl.jpg"
import nuclearPowerPlant from "../assets/images/power_plant.png"

const Stories = () => {
  const { t } = useTranslation()

  return (
    <>
      <Menus_Navbar />
      <main className="stories-content">
        <div className="stories-title">
          <h1>{t("storiesTitle")}</h1>
          <div className="story-cards">
            <StoriesCard
              aligning="right"
              link="https://hu.wikipedia.org/wiki/Csernobil"
              cardTitle={t("storiesPripyat")}
              cardImage={pripyatImage}
              cardImageAlter="Pripyat Card"
            />
            <StoriesCard
              aligning="left"
              link="https://hu.wikipedia.org/wiki/Pripjaty_(Kijevi_ter%C3%BClet)"
              cardTitle={t("storiesChernobyl")}
              cardImage={chernobylImage}
              cardImageAlter="Chernobyl Card"
            />
            <StoriesCard
              aligning="right"
              link="https://hu.wikipedia.org/wiki/Csernobili_atomer%C5%91m%C5%B1"
              cardTitle={t("storiesPowerPlant")}
              cardImage={nuclearPowerPlant}
              cardImageAlter="Power Plant Card"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Stories
