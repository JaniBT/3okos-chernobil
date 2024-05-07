import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; 
import "./About.css";
import { HiArrowNarrowDown } from "react-icons/hi";
import { AndrisKep, BalazsKep, BurningReactor, ControlRoom, HeliCrash, Helicopter, JaniKep, Liquidators, OldSarcophage } from "../assets/images/images"

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about-body">
        <div className="about-main-container">
          <header className="about-home-link">
            <nav>
              <Link to="/">{t('nav_one')}</Link>
            </nav>
          </header>
          <h1>{t("About us")}</h1>
          <iframe width="822" height="515" src="https://www.youtube.com/embed/f5ptI6Pi3GA?si=pLR6y4jb7G3oBO8W" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>{t("In memorial of the chernobyl catastrophe.")}</p>
          <hr />
          <h2>{t("This page was made in memorial of the people who suffered through these times.")}</h2>
          <HiArrowNarrowDown />
          <h3>{t("view gallery")}</h3>
          <div className="temporary-div">
          </div>
          <h4>{t("learn more")}</h4>
          <div className="learn-more-texts">
            <div className="left-text">
              <p>{t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique quisquam architecto. Harum, ad consequatur aut obcaecati, culpa fugiat eius quidem amet, quam cumque magni.")}</p>
              <p>{t("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis, dolore adipisci officiis ducimus nihil. Harum ut, nulla iusto rem aliquid voluptatibus tenetur modi natus excepturi beatae quam obcaecati ab ex? Alias dolore atque inventore voluptas officiis doloremque dolores dolorum, laudantium sequi, itaque voluptatibus? Sunt beatae et sed quia deserunt?")}</p>
            </div>
            <div className="right-text">
              <p>{t("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis, dolore adipisci officiis ducimus nihil. Harum ut, nulla iusto rem aliquid voluptatibus tenetur modi natus excepturi beatae quam obcaecati ab ex? Alias dolore atque inventore voluptas officiis doloremque dolores dolorum, laudantium sequi, itaque voluptatibus? Sunt beatae et sed quia deserunt?")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
