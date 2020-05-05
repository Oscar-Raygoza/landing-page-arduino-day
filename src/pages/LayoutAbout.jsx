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
        <p className="subtitle-about">
          Electronic Cats is an open hardware startup which develops hardware
          for Internet of Things, hacking and education, was founded by Andres
          Sabas, Eduardo Contreras and Ignacio Acosta in Aguascalientes, Mexico
          in 2017 is one of the pioneer startups in the ecosystem of LoRaWAN
          networks and devices.
        </p>
        <p className="subtitle-about">
          Bank cards have information in their magnetic stripe that is used to
          validate transactions; Being static information, becomes one of the
          biggest disadvantages of this magstripe information. Most of the
          attackers use this limitation to seize the information using a
          skimming technique which occurs mainly in ATMs. The malicious
          attackers add a second card reader to obtain the information of the
          person who uses the ATM, PoS or terminal. Although, some cases come to
          light where some workers in establishments that had a second card
          reader in addition to the store's own PoS to perform such data theft.
        </p>
        <p className="subtitle-about">
          The preferred ATMs for criminals are those not located in the banking
          offices, since these are usually the most watched. The criminals
          prefer ATMs located in streets; even better if they are less exposed
          to the public, to place on the card reader a second camouflaged
          skimmer under the same appearance as the original, which will be
          retrieved later to obtain all the information of the cards that have
          passed through it.
        </p>
        <p className="subtitle-about">
          In Mexico, the National Commission for the Protection and Defense of
          Users of Financial Services (Condusef) reported that identity theft or
          card cloning is a phenomenon that has increased considerably and can
          speak up to 200%, derived from the claims for unrealized consumption.
        </p>
        <p className="subtitle-about">
          According to the creators of Hunter Cat, the security researcher{" "}
          <b>Salvador Mendoza</b> and <b>Andrés Sabas</b> Director of Electronic
          Cats, this new product has everything necessary that most credit card
          or debit card users can detect these cloning devices called "skimmers"
          That can be found in ATMs that have been compromised. Thanks to the
          Hunter Cat, the users can insert and scan the ATM reader to check any
          unusual reading behavior before inserting its bank card.
        </p>
        <p className="subtitle-about">
          Hunter Cat works detecting the quantity of magnetic stripe heads
          inside the card reader. Giving the user information by LEDs on the
          same Hunter Cat board. The scan process is simple. The user just have
          to insert and remove the Hunter Cat normally before inserting the bank
          card. The Hunter will take a second to process the information and
          giving the reading status with three different LEDs: Ok, Warning and
          Dangerous. With this information, the user could proceed or not
          depending on the alert LEDs.
        </p>

        <p className="subtitle-about">
          This card will be available from July 22 in pre-sale with a special
          discount for the first 100 buyers. For more information, visit the
          official page of Electronic Cats. Some talks about the functionality
          of Hunter Cat will be at several events including DEFCON, the largest
          congress of hackers of the world.
        </p>
        <br />
        <p className="subtitle-about-sub">About Electronic Cats</p>
        <p className="subtitle-about">
          Electronic Cats is a free hardware startup for the Internet of Things,
          hacking and space education, was founded by Andres Sabas, Eduardo
          Contreras and Ignacio Acosta in Aguascalientes, Mexico in 2017 is one
          of the pioneer startups in the ecosystem of networks and devices LoRa.
        </p>
        <br />
        <a
          className="subtitle-about link"
          href="https://drive.google.com/drive/folders/1h6v8n0SvHUqrxofwU9C4TQc5cffGVWof?usp=sharing"
        >
          PRESS RELEASE
        </a>
        <br />
        <br />
        <br />
        <div className="subtitle-about txt-small">
          Salvador Mendoza and Electronic Cats do NOT take any responsibility;
          adding that Salvador Mendoza and Electronic Cats are NOT liable for
          any damage caused through use of Hunter Cat, be it indirect, special,
          incidental or consequential damages.
        </div>
        <PressRelease />
      </div>
    );
  }
}
