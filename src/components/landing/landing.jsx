import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Particles from "react-particles-js";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

class Landing extends React.Component {

  constructor(props) {
    super(props);
  };

  render () {
    return <div className="splash">
        <div className="landing">
          <div className="landing-gradient">
            <Particles params={{ particles: { number: { value: 160, density: { enable: true, value_area: 1500 } }, line_linked: { enable: false, opacity: 0.4, distance: 150, width: 1 }, move: { random: true, speed: 1, direction: "left", out_mode: "out" }, size: { value: 3, random: true, anim: { speed: 4, size_min: 0.3 } }, opacity: { anim: { enable: true, speed: 1, opacity_min: 0.5 } } }, interactivity: { events: { onclick: { enable: true, mode: "push" }, onhover: { enable: true, mode: "grab" } }, modes: { push: { particles_nb: 1 } }, detect_on: "window" }, retina_detect: true }} />
          </div>
          <div className="landing-background">
            {/* <img src="./images/BrassGuitar.jpg" alt="" /> */}
          </div>
          <div className="greeting">
            <h1>
              <Typed showCursor={false} strings={[`Hello, ${this.props.match.params.name ? this.props.match.params.name + "!" : ""}`]} typeSpeed={40} />
            </h1>
          </div>
          <br />
          <div className="name">
            <h1>
              <Typed strings={[`I'm Nigel Rodrigues`]} typeSpeed={40} />
            </h1>
          </div>
          <br />
          <br />
          <Link to="/cv">
            <div className="landing-cv">
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
          </Link>
          {/* Options go here */}
        </div>
      </div>;

  };
}
export default withRouter(Landing);

// options
{/* <div className="options">
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
    <Button className="material-button" variant="outlined" id="research-button">
      <div className="projects">Projects</div>
    </Button>
  </Link>
  <Link to="/aboutme">
    <Button className="material-button" variant="outlined" id="research-button">
      <div className="about">About</div>
    </Button>
  </Link>
  <a href="https://www.google.com/maps/d/u/0/embed?mid=1TLSTtMiDihATBZZQVluwUtVPnoA&ll=32.78099493245676%2C-9.632912300000044&z=2">
    <Button className="material-button" variant="outlined" id="research-button">
      <div className="travel">Travel</div>
    </Button>
  </a>
</div> */}

// more optinos
{/* <div className="landing-options">
  <div className="landing-cv">
    <img src="./images/BoatBridge.jpg" alt="" />
  </div>
  <div className="landing-projects">
    <img src="./images/BrassGuitar.jpg" alt="" />
  </div>
  <div className="landing-photo">
    <img src="./images/BoatBridge.jpg" alt="" />
  </div>
  <div className="landing-travel">
    <img src="./images/Bridge.jpg" alt="" />
  </div>
</div> */}