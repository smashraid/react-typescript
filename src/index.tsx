import * as React from "react";
import * as ReactDOM from "react-dom";

//import { Hello } from "./components/Hello";
import Game from "./components/game";
import BasicExample from "./components/routes";

import "./style.scss";

if (typeof document !== "undefined") {
    ReactDOM.render(        
        <BasicExample />,
        document.getElementById("example")
    );
}