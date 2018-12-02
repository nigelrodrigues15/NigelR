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
        <div className="cv-education">
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
        <div className="cv-skills">
          <h1>Computer Skills</h1>
          <p>
            Design SolidWorks (CAD/Simulation) Analysis Ansys (FEA & CFD),
            PTC Mathcad, SMath Hardware Integration NI LabWindows/CVI
            (similar to LabVIEW) Microsoft Office Suite: Word, Excel,
            PowerPoint Programming Languages MATLAB, R (Statistics), Ruby,
            JavaScript, SQL Proficient in HTML, Python and C Product
            Lifecycle Management: Agile Issue and Project Tracking: JIRA,
            SCRUM
          </p>
        </div>
        <div className="cv-competitions">
          <h1>Competitions</h1>
                <p>Western Engineering Competition 
                  Participant |Banff, Canada |Jan 2018
                  UAEC Senior Design Competition (VEX Robotics)
                  1st Place |Edmonton, Canada |Oct 2017
                  Microsoft Coding Competition
                  2nd Place |Edmonton, Canada |Sept 2017
                  ENCMP Programming Competition
                  2nd Place |Edmonton, Canada |Mar 2014
                </p>
        </div>
      </div>;
  }
}

export default withRouter(CV);
