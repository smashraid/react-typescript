import * as React from "react";
import * as ReactDOM from "react-dom";

//import { Hello } from "./components/Hello";
import Game from "./components/game";

import "./style.scss";

if (typeof document !== "undefined") {
    ReactDOM.render(
        <Game />,
        document.getElementById("example")
    );
}