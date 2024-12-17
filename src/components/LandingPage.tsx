/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./header/Header";
import QuizComponent from "./quizComponent/QuizComponent";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="blur-background">
      
                <Header />

                <div className="content" style={{ marginTop: "-75px" }}>
                <QuizComponent/>
      </div>
      
      <footer className="footer">
        <a href="#" className="footer-link">
          Privacy Policy
        </a>
        <span className="separator">|</span>
        <a href="#" className="footer-link">
          Terms of Use
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
