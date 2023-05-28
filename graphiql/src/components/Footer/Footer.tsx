import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer-links">
          <a
            className="footer-link footer-link__github"
            href="https://github.com/GrigoriyKlimenko"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon_github"></span>
            Grigoriy Klimenko
          </a>
          <a
            className="footer-link footer-link__github"
            href="https://github.com/imnephy"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon_github"></span>Ilya Vylegzhanin
          </a>
          <a
            className="footer-link footer-link__github"
            href="https://github.com/pshigotskaya26"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon_github"></span>Pshihotskaya Tatsiana
          </a>
        </div>
        <p className="footer-text">2023</p>
        <a
          className="footer-link footer-link__rsschool"
          href="https://rs.school/react/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon icon_rsschool"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
