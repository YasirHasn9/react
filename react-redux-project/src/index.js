import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
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

//////////////////////////
/*
when redux is helpful
-complex data flows 
          so if you writing a static component ,
           you don't need to use it

inter-components communication
     when you need to pass a data to different component that dont't
     have a parent-child relationship

many action such as : write , read , delete

utilize the same data in many places
-
*/
