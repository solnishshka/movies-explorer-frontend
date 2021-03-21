import React from 'react';

import PromoImage from '../PromoImage';
import SectionTitle from '../SectionTitle';

import './Promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__left-column">
          <SectionTitle title="Учебный проект студента факультета Веб-разработки." type="promo" />
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__link" href="/">Узнать больше</a>
        </div>
        <PromoImage />
      </div>
    </section>
  );
}

export default Promo;