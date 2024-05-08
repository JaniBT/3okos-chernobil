import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import "./Thoughts.css";

const Thoughts = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="thoughts-body">
        <button>See all thoughts</button>
        <form action=""></form>
        <textarea name="" id=""></textarea>
      </div>
      <Footer />
    </>
  );
};

export default Thoughts;
