import React, { Fragment, Component } from "react";

import "./Styles/Convocatoria.scss";

import Button from "./widgets/Button.jsx";

class Convocatoria extends Component {
  render() {
    return (
      <Fragment>
        <section className="convocatoria">
          <div className="convocatoria__ubic">
            <span className="convocatoria__txt">
              Convocatoria abierta de proyectos de
            </span>
            <span className="convocatoria__txt--ags">
              Aguascalientes y el BAJIO
            </span>
            <span className="convocatoria__txt--states">
              (Zacatecas, Jalisco, Guanajuato y San Luis Potosí).
            </span>
          </div>
          <div className="convocatoria__description">
            <p className="convocatoria__description--txt">
              The Inventor’s House e IDSCEA se encuentran en búsqueda de
              proyectos realizados con arduino hechos por entusiastas, que
              integran tecnología en su funcionamiento, que sean
              objetosinteractivos y sobre todo divertidos.
            </p>
          </div>
          <div className="convocatoria__button">
            <Button
              className="convocatoria__button--btn"
              href="https://docs.google.com/forms/d/18L6Zpc0F-SAU_TgENm3FyNUFzi_El65Oa7hN8gxjkUQ/viewform?edit_requested=true"
              title="REGISTRA TU PROYECTO"
            />
          </div>
          <div className="convocatoria__title">
            <h1 className="convocatoria__footer--title">Asiste al evento</h1>
          </div>
          <div className="convocatoria__description--orange">
            <p className="convocatoria__description--tx">
              Vive la experiencia y asiste a los diversos talleres de Arduino,
              construye, <br />
              diviértete y aprende en las mesas abiertas de múltiples
              actividades <br />
              Maker. Explora la Feria Maker y conoce cada unos de los proyectos
              que los creadores traen para
              <br /> ti, y por último, asiste a las charlas de reconocidas
              figuras de la comunidad donde compartirán <br />
              conocimientos y experiencias.
            </p>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Convocatoria;
