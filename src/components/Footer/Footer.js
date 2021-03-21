import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__content">
        <p className="footer__copyright">©2021</p>
        <ul className="footer__links">
          <li className="footer__link-item"><a className="footer__link" href="/">Яндекс.Практикум</a></li>
          <li className="footer__link-item"><a className="footer__link" href="/">Github</a></li>
          <li className="footer__link-item"><a className="footer__link" href="/">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );  
}

export default Footer;