import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiPaperAirplane } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { lazy } from 'react';
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
    successfulSend();
    const messagesDiv = document.querySelector(".messagesDiv");
    if (messagesDiv.innerText != "") {
      messagesDiv.style.display = "block";
    }
  };

  const previewBtn = (e) => {
    e.preventDefault();
    const previewDiv = document.querySelector(".previewDiv");
    if (previewDiv.innerText != "") {
      previewDiv.style.display = "block";
    }
  };

  const successfulSend = () => {
    // TODO ALERT
    alert("success")
  }

  return (
    <div className="thoughts-body">
      <header className="inside-menus-wrapper">
        <nav>
          <Link to="/">{t("nav_one")}</Link>
          <Link to="/menus">{t("menu_text")}</Link>
        </nav>
      </header>
      <h1 className="messageHeading">{t("messageHeading")}: <span className="messageStar">*</span>
      </h1>
      <div className="thoughts-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="messageArea"
            placeholder={t("textareaPlaceholder")}
            value={message}
            onChange={handleMessageChange}
            maxLength={500}
          ></textarea>{""}
          <br />
          <button className="messageBtn" type="submit">
            <HiPaperAirplane /> {t("thoughtsMessage")}
          </button>
          <button className="revealBtn" type="button">
            {/* TODO: Lazy loading  */}
            <FaArrowDown /> {t("seeAllMessages")}
          </button>
          <button className="previewBtn" type="button" onClick={previewBtn}>
            <VscOpenPreview /> {t("revealMessage")}
          </button>
        </form>
      </div>
      <div className="reveal-messages-container">
        <div className="messagesDiv">
          <pre>{message}</pre>
        </div>
        <div className="previewDiv">
          <pre>{message}</pre>
        </div>
        {/* TODO: loading preview 3 lines  */}
      </div>
    </div>
  );
};

export default Thoughts;
