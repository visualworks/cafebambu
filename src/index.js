import React from "react";
import ReactDOM from "react-dom";
import Layout from "layout";

require("css/style.scss");
// require('config.json');

const config = require("assets/config.json");
const layout = <Layout config={config} />;
ReactDOM.render(
    layout,
    document.getElementById("index")
);