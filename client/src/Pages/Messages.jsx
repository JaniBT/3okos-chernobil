import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiPaperAirplane } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { lazy } from 'react';
import "./Messages.css";
import { Link } from "react-router-dom";

const MessageForm = () => {
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
      alert("Message submitted successfully!");
    } else {
      alert("Please enter a message before submitting.");
    }
  };

  const handleReveal = () => {
    setRevealMessages(true);
  };

  return (
    <div>
      <div className="message-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="message-area"
            value={message}
            maxLength={750}
            onChange={handleMessageChange}
            placeholder="Type your message..."
          />
          <br />
          <div className="button-container">
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <button className="reveal-btn" type="button" onClick={handleReveal}>
              Reveal Messages
            </button>
          </div>
        </form>
      </div>
      {revealMessages && messages.length > 0 && (
        <div className="reveal-messages-container">
          <h2 className="reveal-heading">Past Messages:</h2>
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
