import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Landing extends React.Component {

  constructor(props) {
    super(props);
  };

  render () {

    return <div className="landing">
        <div className="landing-background">
          {/* <img src="./images/BrassGuitar.jpg" alt="" /> */}
        </div>
        <div className="greeting">Hello,</div>
        <h1>
          {this.props.match.params.name
            ? this.props.match.params.name
            : null}
        </h1>
        <br />
        <div className="name">Nigel Rodrigues</div>
        <br />
        <div className="options">
          <Link to="/cv">
            <Button className="material-button" variant="outlined" id="research-button">
              <div className="cv">CV</div>
            </Button>
          </Link>
          <Link to="/photography">
            <Button className="material-button" variant="outlined" id="research-button">
              <div className="photography">Photography</div>
            </Button>
          </Link>
          <Link to="/projects">
          <Button className="material-button"variant="outlined" id="research-button">
              <div className="projects">Projects</div>
            </Button>
          </Link>
          <Link to="/aboutme">
          <Button className="material-button"variant="outlined" id="research-button">
              <div className="about">About</div>
            </Button>
          </Link>
          <Link to="/travel">
          <Button className="material-button"variant="outlined" id="research-button">
              <div className="travel">Travel</div>
            </Button>
          </Link>
        </div>
      </div>;
  };
}
export default withRouter(Landing);
