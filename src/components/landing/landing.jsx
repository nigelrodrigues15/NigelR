import React from "react";
import { Link, withRouter } from "react-router-dom";

class Landing extends React.Component {

  constructor(props) {
    super(props);
  };

  render () {

    return(
      <div className="landing">
        <div className="greeting">Hello,</div>
        <h1>{this.props.match.params.name ? this.props.match.params.name : null}</h1>
        <br />
        <div className="name">Nigel Rodrigues</div>
        <br />
        <div className="options">
          <Link to="/cv">
            <div className="cv">CV</div>
          </Link>
          <Link to="/photography">
            <div className="photography">Photography</div>
          </Link>
          <Link to="/projects" >
            <div className="projects">Projects</div>
          </Link>
          <Link to="/aboutme" >
            <div className="about">About</div>
          </Link>
          <Link to="/travel" >
            <div className="travel">Travel</div>
          </Link >
        </div>
      </div>
    );
  };
}
export default withRouter(Landing);
