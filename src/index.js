import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Home from "screens/Home";
import GlobalStyles from "resources/styles/Global.js";

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <Home />
  </Fragment>,
  document.getElementById("root")
);
