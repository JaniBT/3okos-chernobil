import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import "./Thoughts.css";
import { Link } from "react-router-dom";

const Thoughts = () => {
  const { t } = useTranslation();

  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <div className="thoughts-body">
      <header className="inside-menus-wrapper">
        <nav>
          <Link to="/">{t("nav_one")}</Link>
          <Link to="/menus">{t("menu_text")}</Link>
        </nav>
      </header>
      <h1>Tell us something about your ideas, thoughts, explain it in long sentences: <span className="messageStar">*</span></h1>
      <div className="thoughts-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="messageArea"
            placeholder="Write your thoughts here..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>{" "}
          <br />
          <button className="messageBtn" type="submit">
            <HiOutlinePaperAirplane /> {t("thoughtsMessage")}
          </button>
          <button className="revealBtn" type="button">
            <HiOutlinePaperAirplane /> {t("thoughtsMessage")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Thoughts;
