import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Landing from "./landing/landing_container";
import CVContainer from "./cv/cv_container";
import PhotosContainer from "./photos/photos_container";
import ProjectsContainer from "./projects/projects_container";
import AboutContainer from "./about/about_container";
import TravelContainer from "./travel/travel_container";
import CompanyContainer from "./company/company_container";
import ResearchContainer from "./research/research_container";

const App = () => (
    <div>
  
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/q/:name" component={Landing} />
        <Route exact path="/cv" component={CVContainer} />
        <Route exact path="/photography" component={PhotosContainer} />
        <Route exact path="/projects" component={ProjectsContainer} />
        <Route exact path="/aboutme" component={AboutContainer} />
        <Route exact path="/travel" component={TravelContainer} />
        <Route exact path="/company/:companyTik" component={CompanyContainer} />
        <Route exact path="/research/:companyTik" component={ResearchContainer} />
      </Switch>
    </div>
  );
  
  export default App;