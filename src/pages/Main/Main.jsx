import React from "react";

import AboutMe from "../../components/AboutMe";
import Promo from "../../components/Promo";
import AboutProject from "../../components/AboutProject";
import Techs from "../../components/Techs";
import Portfolio from "../../components/Portfolio";

import "./Main.css";

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
