import React, { Fragment, Component } from "react";

import "./Styles/DavidComponent.scss";

/**
 * * Assets
 */
import David from "../assets/images/David.jpg";

class DavidComponent extends Component {
  render() {
    return (
      <Fragment>
        <section className="DavidComponent">
          <div className="david__title">
            <h1 className="david__title--h1">Con la presencia de</h1>
          </div>
          <div className="david__info">
            <h1 className="david__info--name">David Cuartielles</h1>
            <h2 className="david__info--subtitle">Co-creador de Arduino</h2>
            <p className="david__info--description">
              David es co-autor de un par de libros sobre programación en
              Android. Ha participado en colecciones de ensayos sobre diseño,
              creado un par de robots educativos y publicado una serie de
              artículos de divulgación sobre tecnología.
            </p>
            <p className="david__info--description">
              También es el co-fundador de la plataforma Arduino, por diseñar el
              primer circuito, elegir el tipo de fuente en la placa, darle la
              forma tan característica, crear el primer bootloader y por ser un
              defensor de la creación de tecnología en castellano.
            </p>
          </div>
          <div className="david__picture">
            <img src={David} alt="David.jpg" className="david__picture--img" />
          </div>
          <div className="david__fotter">
            <h1 className="david__footer--title">Prepara tu proyecto</h1>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default DavidComponent;
