import React from "react";
import  App from "./src/components/App";

import ReactDom from "react-dom";

/*const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <App/>
)*/

const page = ReactDom.createRoot(document.getElementById("root"))
page.render(
    <>
    <h1>Hello world</h1>
    <App/>
    </>
);