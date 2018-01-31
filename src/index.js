import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/bulma/css/bulma.css";
import App from "./containers/App";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
