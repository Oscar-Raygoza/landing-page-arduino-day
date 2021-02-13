import React, { Fragment, Component } from "react";

import "./Styles/RegisterForm.scss";

/**
 * * Assets
 */
import bannerLeft from "../assets/images/BannerLeft.svg";
import bannerRigth from "../assets/images/BannerRigth.svg";

/*
 * * Components
 */
import Button from "./widgets/Button.jsx";
class RegisterForm extends Component {
  render() {
    return (
      <Fragment>
        <section className="registerForm">
          <div className="registerForm__image--left">
            <img src={bannerLeft} alt="" />
          </div>
          <div className="registerForm__button">
            <Button
              className="convocatoria__button--btn"
              href="https://www.eventbrite.com/e/arduino-day-aguascalientes-tickets-93386125415"
              title="QUIERO ASISTIR"
            />
          </div>
          <div className="registerForm__image--rigth">
            <img src={bannerRigth} alt="" />
          </div>
          <div className="registerForm__date">
            <h2 className="header__subtitle--time color-secundary font-size-420">
              13 DE MARZO / ONLINE
            </h2>
            <h2 className="header__subtitle--time color-primary margin-top-15 font-size-420">
              A partir de las 9:00 horas
            </h2>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default RegisterForm;
