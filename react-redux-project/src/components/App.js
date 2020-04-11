import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        {/* switch will render the first component that match the url */}
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />

        {/* this is a fallback component, in case , the user didnt find 
        the page they want */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
