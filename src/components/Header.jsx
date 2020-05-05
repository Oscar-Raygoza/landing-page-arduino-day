import React, { Fragment, Component } from "react";

import "./Styles/Header.scss";

/**
 * Assets
 */
import arduino from "../assets/images/ArduinoDayLogo.svg";
import sedec from "../assets/images/SEDEC-min.png";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <section className="header">
          <div className="header__ard">
            <img src={arduino} alt="arduino" className="header__ard--logo" />
            <div className="header__ard--container">
              <h1 className="header__container--register">
                !Registra tu proyecto!
              </h1>
              <h2 className="header__container--date">
                Tienes hasta el <br />
                28 de Febrero
              </h2>
            </div>
          </div>
          <div className="header__title">
            <img className="header__title--logo" src={sedec} alt="" sizes="" />
            <span className="header__title--txt">CONSTRUYE</span>
            <span className="header__title--txt">DIVIÈRTETE</span>
            <span className="header__title--txt header__title--txt--xl">
              APRENDE
            </span>
          </div>
          <div className="header__subtitle">
            <div className="header__subtitle--container">
              <samp className="header__subtitle--number">13</samp>
              <samp className="header__subtitle--date">DE MARZO</samp>
            </div>
            <div className="header__logo--descubre">
              <h2 className="descubre--logo">MUSEO DESCUBRE</h2>
            </div>
            <samp className="header__subtitle--time">
              A partir de las 9:00 horas
            </samp>
          </div>
          <div className="header__banner"></div>
        </section>
        <div className="header__grid"></div>
      </Fragment>
    );
  }
}

export default Header;
