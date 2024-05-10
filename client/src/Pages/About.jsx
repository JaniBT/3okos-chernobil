import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; 
import "./About.css";
import { HiArrowNarrowDown } from "react-icons/hi";
import { AndrisKep, BalazsKep, BurningReactor, ControlRoom, HeliCrash, Helicopter, JaniKep, Liquidators, OldSarcophage } from "../assets/images/images";
import AboutImages from "../components/AboutImages";
import AboutTeamMembers from "../components/AboutTeamMembers";
import Footer from "../components/Footer";

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
          <h1>{t("aboutUs")}</h1>
          <iframe src="https://www.youtube.com/embed/f5ptI6Pi3GA?si=pLR6y4jb7G3oBO8W" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>{t("iFrameLabel")}</p>
          <hr className="first-hr" />
          <h2>{t("inMemorial")}</h2>
          <HiArrowNarrowDown />
          <h3>{t("gallery")}</h3>
          <div className="about-images">
            <AboutImages source={ControlRoom} />
            <AboutImages source={BurningReactor} />
            <AboutImages source={Helicopter} />
            <AboutImages source={HeliCrash} />
            <AboutImages source={Liquidators} />
            <AboutImages source={OldSarcophage} />
          </div>
          <Link className="learn-more-link" to="https://en.wikipedia.org/wiki/Chernobyl_disaster">{t("moreInfo")}</Link>
          <div className="curiosity-texts">
            <div className="left-text">
              <p>{t("moreInfoTextFirst")}</p>
              <p>{t("moreInfoTextSecond")}</p>
            </div>
            <div className="right-text">
              <p>{t("moreInfoTextThird")}</p>
            </div>
          </div>
          <h4>{t("teamInfo")}</h4>
          <div className="team-members">
            <AboutTeamMembers source={JaniKep} name={t("Csordás János")} link_github={"https://github.com/JaniBT"} link_name_github={"Github"} link_instagram={"https://www.instagram.com/_jano666_/"} link_name_instagram={"Instagram"} />
            <AboutTeamMembers source={BalazsKep} name={t("Koós Balázs Bence")} link_github={"https://github.com/koosbalazsbence"} link_name_github={"Github"} link_instagram={"https://www.instagram.com/koosbalazsbence/"} link_name_instagram={"Instagram"} />
            <AboutTeamMembers source={AndrisKep} name={t("Vásári András")} link_github={"https://github.com/arris05"} link_name_github={"Github"} link_instagram={"https://www.instagram.com/andris_vsri_/"} link_name_instagram={"Instagram"} />
          </div>
          <hr className="second-hr" />
          <h6>{t("contactInfo")}</h6>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
