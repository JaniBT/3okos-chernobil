import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiPaperAirplane } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";
import { lazy } from 'react';
import "./Messages.css";
import { Link } from "react-router-dom";

const MessageForm = () => {
  const { t } = useTranslation();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [revealMessages, setRevealMessages] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
      setRevealMessages(false);
      alert(t("sendSuccess"));
    } else {
      alert(t("sendFailed"));
    }
  };

  const handleReveal = () => {
    setRevealMessages(true);
  };

  return (
    <div>
      <header className="inside-menus-wrapper">
        <nav>
          <Link to="/">{t("nav_one")}</Link>
          <Link to="/menus">{t("menu_text")}</Link>
        </nav>
      </header>
      <h1 className="message-heading">{t("messageHeading")}: <span className="message-star">*</span></h1>
      <div className="message-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="message-area"
            value={message}
            maxLength={750}
            onChange={handleMessageChange}
            placeholder={t("textareaPlaceholder")}
          />
          <div className="button-container">
            <button className="submit-btn" type="submit">
            <HiPaperAirplane /> {t("thoughtsMessage")}
            </button>
            <button className="reveal-btn" type="button" onClick={handleReveal}>
            <FaArrowDown /> {t("seeAllMessages")}
            </button>
          </div>
        </form>
      </div>
      {revealMessages && messages.length > 0 && (
        <div className="reveal-messages-container">
          <h2 className="reveal-heading">{t("seeAllMessages")}</h2>
          <div>
            <ul>
              {messages.map((msg, index) => (
                <li className="reveal-messages-inner-item" key={index}>
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageForm;
