import React, { Component } from "react";

/**
 * Assets
 */
import "./Styles/Layout.scss";

/**
 * Components
 */
import Navbar from "../components/Navbar/Navbar.jsx";
import TitleComponent from "../components/TitleHunter.jsx";
import PressRelease from "../components/PressRelease.jsx";

export default class LayoutAbout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <TitleComponent />
        <div className="margin-top-50"></div>
        <p className="subtitle-about-sub point">
          <ul>
            <li>What type of skimmers does the cat hunter detect?</li>
          </ul>
        </p>
        <p className="subtitle-about faqs-res">Magnetic stripe skimmers.</p>
        <p className="subtitle-about-sub point">
          <ul>
            <li>Does it work with skimmers that steal data from NFC cards?</li>
          </ul>
        </p>
        <p className="subtitle-about faqs-res">
          Not yet, but we are working on it.
        </p>
        <p className="subtitle-about-sub point">
          <ul>
            <li>It is not yet clear to me how the hunter cat works?</li>
          </ul>
        </p>
        <p className="subtitle-about faqs-res">
          The Hunter Cat works by detecting the magnetic stripe head readers
          that are inside of the card reader and displays the results using LEDs
          that are on the same Hunter Cat. These LEDs symbolize three types of
          alerts: Ok, Warning or Dangerous.
        </p>
        <p className="subtitle-about-sub point">
          <ul>
            <li>I want to be a distributor in my country?</li>
          </ul>
        </p>
        <p className="subtitle-about faqs-res">
          Contact us by email at hola@electroniccats.com
        </p>
        <p className="subtitle-about-sub point">
          <ul>
            <li>When do Hunter Cat shipments begin?</li>
          </ul>
        </p>
        <p className="subtitle-about faqs-res">
          As a pre-sale, the first 100 Hunter Cats will be sold or delivered in
          DEFCON 2019, the following will begin shipping from August 12 in lots
          of 100.
        </p>
        <p className="subtitle-about-sub point">
          <ul>
            <li>How much warranty time does each Hunter Cat card have?</li>
          </ul>
        </p>
        <p className="subtitle-about faqs-res">
          Each product of Electronic Cats has 3 warranty months.
        </p>
        <p className="subtitle-about-sub point">
          <ul>
            <li>
              How is the shipment made and how long can it take to arrive?
            </li>
          </ul>
        </p>
        <p className="subtitle-about faqs-res">
          The type of shipment is registered mail for everyone and the average
          delivery time is 30 to 60 days and a tracking number will be offered.
        </p>
        <div className="margin-top-50"></div>
        <PressRelease />
      </div>
    );
  }
}
