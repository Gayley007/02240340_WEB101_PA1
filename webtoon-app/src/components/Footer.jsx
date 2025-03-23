import React from "react";
import "../styles/Footer.css";
import { FaChevronRight } from "react-icons/fa"; 
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import webtoonLogo from "../assets/webtoonLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-notice">
        <span className="notice-title">Notice</span>
        <FaChevronRight className="notice-icon" /> 
        <span className="notice-text">2025 WEBTOON Contest: Webcomic Legends - Official Rules</span>
        <span className="date">March 20, 2025</span>
      </div>
      <div className="footer-download">
        <p>Download WEBTOON now!</p>
        <div className="footer-buttons">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>
      <div className="social-icons">
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaYoutube className="social-icon" />
      </div>
      <div className="footer-links">
        <div className="footer-nav">
          <a href="#">About</a>
          <a href="#">Feedback</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Advertise</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-language">
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Indonesia</option>
          </select>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© NAVER WEBTOON Ltd.</p>
        <img src={webtoonLogo} alt="Webtoon Logo" />
      </div>
    </footer>
  );
};

export default Footer;
