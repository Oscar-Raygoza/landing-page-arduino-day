import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * Layoutd
 */
import LayoutHome from "./LayoutHome.jsx";
//import LayoutAbout from "./LayoutAbout.jsx";
//import LayoutFaq from "./LayoutFaqs.jsx";

import "../sass/_global.scss"

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header" />
        <div>
          <Route exact path="/arduinoday/" component={LayoutHome} />
        </div>
      </Router>
    );
  }
}

export default App;
