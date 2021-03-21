import React from 'react';
import SectionLayot from '../SectionLayot';
import SectionTitle from '../SectionTitle';

import './Techs.css'

const Techs = () => {
  return (
    <SectionLayot title="Технологии" type="tech">
      <SectionTitle title="7 технологий" type="tech"/>
      <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="tech__list">
        <li className="tech__list-item">HTML</li>
        <li className="tech__list-item">CSS</li>
        <li className="tech__list-item">JS</li>
        <li className="tech__list-item">React</li>
        <li className="tech__list-item">Git</li>
        <li className="tech__list-item">Express.js</li>
        <li className="tech__list-item">mongoDB</li>
      </ul>
    </SectionLayot>
  );
}

export default Techs;