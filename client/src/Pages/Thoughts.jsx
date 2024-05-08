import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import "./Thoughts.css";

const Thoughts = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="thoughts-body">
        <div className="thoughts-container">
          <button>See all thoughts</button>
          <p htmlFor="">
            Tell us something about your ideas, thoughts, explain it in long
            sentences: <span>*</span>
          </p>
          <form action="">
            <label htmlFor=""></label>
          </form>
          <textarea name="" id="" placeholder="Write here..."></textarea>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thoughts;
