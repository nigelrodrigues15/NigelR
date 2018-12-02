import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {

  }

  render() {
    return <div className="cv">
        <h1>This is my CV</h1>
        <div>
          <h1>Education</h1>
          <p>
            • MEng, Mechanical and Mechatronics Engineering, Graduate
            Diploma in Design Co-op, Ongoing • BSc, Mechanical Engineering
            Co-op, Minor in Mathematics, 2018 • Louise McKinney Scholarship
            • (top 1.5-2% in Mech. Eng. • NSERC USRA Research Award • Dean’s
            Research Award • U of A Academic Excellence Capstone: Analyzed
            failure modes of a disabled ski outrigger and redesigned hinge
            to prevent stranded skiers.
          </p>
        </div>
      </div>;
  }
}

export default withRouter(CV);
