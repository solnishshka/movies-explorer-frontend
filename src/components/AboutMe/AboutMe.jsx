import React from "react";
import SectionLayot from "../SectionLayot";
import SectionTitle from "../SectionTitle";

import photo from "../../images/portrait.jpg";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <SectionLayot title="Студент" type="student">
      <div className="student__info">
        <div className="student__description">
          <SectionTitle title="Анастасия" type="student" />
          <p className="student__subtitle">Фронтенд-разработчик, 32 года</p>
          <p className="student__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="student__social">
            <li>
              <a
                className="student__link"
                href="https://www.facebook.com/anastasiya.stratilatova/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="student__link"
                href="https://github.com/solnishshka"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="student__photo" src={photo} alt="Фотография студента" />
      </div>
    </SectionLayot>
  );
};

export default AboutMe;
