import React, { Component } from "react";

import "./Styles/Footer.scss";

/**
 * * Assets
 */
import logoTih from "../assets/images/TIH-min.png";
import logoIdscea from "../assets/images/SEDEC_-min.png";
import logoConacyt from "../assets/images/Conacyt-min.png";
import logoEc from "../assets/images/EC-min.png";
import logoWhurth from "../assets/images/whurth-min.png";
import logoMouser from "../assets/images/MouserLogo-min.png";
import logoCitein from "../assets/images/Citein-min.png";
import logoVagos from "../assets/images/we-can-min.png";
import logoGolem from "../assets/images/golem-min.png";
import logoPrepaTec from "../assets/images/prepaTEC-min.png";
class Footer extends Component {
  render() {
    return (
      <section className="footer">
        {/*<div className="footer__title">
          <h1 className="david__footer--title color-secundary font-size-420--h1">
            Organizado por:
          </h1>
        </div>
        <div className="footer__img--idscea">
          <img src={logoConacyt} className="footer__logo" alt="" />
        </div>
        <div className="footer__img--conacyt">
          <img src={logoTih} className="footer__logo" alt="" />
        </div>
        <div className="footer__img--tih">
          <img
            src={logoIdscea}
            className="footer__logo--idsea filter-black margin-top-20"
            alt=""
          />
        </div>
        <div className="footer__img--citein">
          <img src={logoCitein} className="footer__logo--citein" alt="" />
    </div>*/}
        <div className="footer__title">
          <h1 className="david__footer--title color-primary font-size-420--h1">
            Con apoyo de:
          </h1>
        </div>
        <div className="footer__img--idscea">
          <img src={logoEc} className="footer__logo--xs" alt="" />
        </div>
        {/*<div className="footer__img--wh">
          <img src={logoWhurth} className="footer__logo--wh" alt="" />
        </div>
        <div className="footer__img--mouser">
          <img src={logoMouser} className="footer__logo--mouser" alt="" />
        </div>

        <div className="footer__img--vagos">
          <img src={logoVagos} className="footer__logo--vagos" alt="" />
        </div>
        <div className="footer__img--golem">
          <img src={logoGolem} className="footer__logo--golem" alt="" />
        </div>
        <div className="footer__img--prepa">
          <img src={logoPrepaTec} className="footer__logo--prepa" alt="" />
  </div>*/}
        {console.log("*TURING*(2020)!".match(/([^A-Za-z*])/g))}
      </section>
    );
  }
}

export default Footer;
