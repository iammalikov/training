import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/normalize.css/normalize.css";
import "./assets/styles/index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("app"));
registerServiceWorker();
