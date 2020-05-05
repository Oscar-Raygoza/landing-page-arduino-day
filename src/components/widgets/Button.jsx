import React, { Fragment, Component } from "react";

import "../Styles/Buttons.scss";

class Button extends Component {
  render() {
    console.log(``);
    return (
      <Fragment>
        <div className={`button ${this.props.className}`}>
          <a className="button__component" href={this.props.href}>
            {this.props.title}
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Button;
