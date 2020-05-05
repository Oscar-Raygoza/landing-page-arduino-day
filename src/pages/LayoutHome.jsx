import React, { Component, Fragment } from "react";

/**
 * Components
 */
import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header.jsx";
import DavidComponent from "../components/DavidComponent.jsx";
import Convocatoria from "../components/Convocatoria.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import Footer from "../components/Footer.jsx";

export default class LayoutHome extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <DavidComponent />
        <RegisterForm />
        <Footer />
      </Fragment>
    );
  }
}
