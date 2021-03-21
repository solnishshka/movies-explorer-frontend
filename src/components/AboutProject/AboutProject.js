import React from 'react';
import SectionLayot from '../SectionLayot';

import './AboutProject.css'

const AboutProject = () => {
  return (
    <SectionLayot title="О проекте" type="project">
      <ul className="about-project__info">
        <li className="about-project__info-item">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__info-item">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="progress-bar">
        <p className="progress-bar__text progress-bar__text_type_green">1 неделя</p>
        <p className="progress-bar__text progress-bar__text_type_dark">4 недели</p>
        <p className="progress-bar__text">Back-end</p>
        <p className="progress-bar__text">Front-end</p>
      </div>
    </SectionLayot>
  );
}

export default AboutProject;