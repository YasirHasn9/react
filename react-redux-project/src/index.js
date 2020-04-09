import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);

/*
the benefit of react component
easy to understand 
less code which miss hight performance 
avid using the this keyword
easy to test
performance 

useMemos avoid needless re render for the performance

the only thing that component function can do is the 
componentDidError()
and 
getSnapShotBeforeUpdate()
  */
