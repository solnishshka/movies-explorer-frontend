import React from 'react';
import SectionLayot from '../SectionLayot';
import SectionTitle from '../SectionTitle';

import photo from '../../images/portrait.png';

import './AboutMe.css';

const AboutMe = () => {
  return (
    <SectionLayot title="Студент">
      <div className="student__info">
        <div className="student__description">
          <SectionTitle title="Анастасия" type="student"/>
          <p className="student__text">Фронтенд-разработчик, 32 года</p>
          <p className="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="student__social">
            <li><a className="student__link" href="/">Facebook</a></li>
            <li><a className="student__link" href="/">Github</a></li>
          </ul>
        </div>
        <img className="student__photo" src={photo} />
      </div>
      <h3 className="student__subtitle">Портфолио</h3>
      <ul className="student__portfolio">
        <li className="student__portfolio-item">
          <a 
            className="student__portfolio-link" 
            href="https://solnishshka.github.io/how-to-learn/" 
            target="_blank" 
            rel="noreferrer">
              Cтатичный сайт
          </a>
        </li>
        <li className="student__portfolio-item">
          <a 
            className="student__portfolio-link" 
            href="https://solnishshka.github.io/russian-travel/index.html" 
            target="_blank" 
            rel="noreferrer">
              Адаптивный сайт
          </a>
        </li>
        <li className="student__portfolio-item">
          <a 
            className="student__portfolio-link" 
            href="https://solnishshka.github.io/react-mesto-auth/" 
            target="_blank" 
            rel="noreferrer">
              Одностраничное приложение
          </a>
        </li>
      </ul>

    </SectionLayot>
  );
}

export default AboutMe;