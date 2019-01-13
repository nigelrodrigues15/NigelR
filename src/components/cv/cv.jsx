import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Particles from "react-particles-js";

class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {

  }

  render() {
    return <div className="cv cv-expand">
        <div className="cv-splash">
        <img src="./images/Person2" alt=""/>
        <Particles params={{
          fps_limit: 28, particles: {
            number: { value: 160, density: { enable: false, value_area: 1500 } }, line_linked: {
              enable: true,
              distance: 30,
              opacity: 1
            }, color: { value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] }, line_linked: { enable: true, opacity: 0.4, distance: 150, width: 1 },size: { value: 3, random: true, anim: { speed: 4, size_min: 0.3 } }, opacity: { anim: { enable: true, speed: 1, opacity_min: 0.5 } } }, interactivity: { events: { onclick: { enable: true, mode: "push" }, onhover: { enable: true, mode: "bubble" } }, modes: { push: { particles_nb: 1 } }, detect_on: "window" }, polygon: { enable: true, type: "inside", move: { radius: 10 }, url: "./images/Person2.svg", draw: { enable: true, stroke: { color: "black" } } }, retina_detect: false }} />
        </div>
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
          <p>
            Western Engineering Competition Participant |Banff, Canada |Jan
            2018 UAEC Senior Design Competition (VEX Robotics) 1st Place
            |Edmonton, Canada |Oct 2017 Microsoft Coding Competition 2nd
            Place |Edmonton, Canada |Sept 2017 ENCMP Programming Competition
            2nd Place |Edmonton, Canada |Mar 2014
          </p>
        </div>
        <div className="cv-volunteering">
          <h1>Volunteering</h1>
          <p>
            University of Alberta Engineering Student Society |2014-2016
            Misericordia Community Hospital Creative Care & Book Cart
            |2009-2014 YMCA Assistant Swim Instructor |2010
          </p>
        </div>
        <div className="cv-hobbies">
          <h1>Hobbies (possibly split into sports)</h1>
          <p>
            Hobbies High School Senior Soccer & Curling Team Community
            Basketball & Badminton Team Other Sports: golfing, skiing,
            surfing Other Hobbies: Photography, Travel
          </p>
        </div>
        <div className="cv-otherinfo">
          <h1>Other Information</h1>
          <p>
            Advanced Class 5 (Non-GDL) driver’s license with access to a
            vehicle ACSA CSTS-09 – Safety Course Certification (WHMIS, First
            Aid, PPE, etc.) Youth Toastmaster’s certificate
          </p>
        </div>
        <div className="cv-experience">
          <h1>Experience</h1>
          <p>
            Avigilon Corporation Mechanical Designer Co-op |Vancouver,
            Canada |Jan - Aug 2017 • Recommended components based on
            performance and cost testing, resulting in a total cost saving
            of ~$150k/year • Performed First Article Inspection (FAI/FPI) on
            injected molded plastics and die cast aluminum to determine if
            parts have the correct dimensional tolerance and suitable
            surface finish for production • Received RMA products and
            performed root cause analysis (RCA) to diagnose and fix issues •
            Conducted thermal, impact, water and stress tests on cameras to
            determine performance of components and possible improvements •
            Designed, fabricated and tested manufacturing jigs and fixtures
            • Created extensive documentation for the assembly & operation
            of the jig • Communicated with manufacturers locally and
            overseas to modify and update OEM parts and assemblies of orders
            around 25k/year Institute of Design, Robotics and Optimization
            Research Co-op |Leeds, United Kingdom |May - Aug 2016 •
            Designed, prototyped and tested a deployment mechanism for a
            drone (octocopter) to release autonomous robots • Mechanism
            designed to release multiple robots at different times using a
            single servo motor to optimize weight and power consumption
            Orthodontic Biomechanics Development Group Research Co-op
            |Edmonton, Canada |May - Aug 2015 • Researched, designed and
            assembled a dual camera optical apparatus to measure the 3D
            deformation in orthodontics • Purchased equipment and
            accessories based on specification and budget • Coded in
            LabWindows/CVI to communicate between hardware components
          </p>
        </div>
        <div className="cv-clubs">
          <h1>Clubs</h1>
          <p>
            EcoCar, Engineering Club Aeroshell Lead | September 2014 to
            present • Designed the aeroshell body for the prototype class
            vehicle based on competition performance specification and
            guidelines for safety • Engineering analysis on vehicle
            performance including FEA of loading scenarios on the composite
            carbon fibre body • Designing an electronic steering mechanism
            for be used in the autonomous driving of the vehicle • Mentoring
            new members in designing and analyzing the frame and firewall to
            ensure safety of the driver • Aided in various aspects of the
            construction and design of a zero-emission vehicle, to compete
            in the Shell Eco marathon efficiency race for sustainable
            transport
          </p>
        </div>
        <div className="cv-projects">
          <h1>Projects</h1>
          <p>
            Canadian Stratospheric Balloon Experiment Challenge Design and
            test a scientific experiment on board a High-Altitude Balloon by
            the Canadian Space Agency Ontario, Canada |Ongoing • Designing
            an experiment to measure how dispersing Calcite aerosol into the
            stratosphere, can mitigate climate change by altering the
            Earth’s albedo Reduced Gravity Experiment Design Challenge
            Perform an experiment on the National Research Council's
            Falcon-20 aircraft to simulate reduced gravity conditions
            Ottawa, Canada |August 2017 • Designed an experiment to study
            how droplets freeze in microgravity to better understand its
            nanomaterial properties and crystallization • One of four
            Canadian teams chosen to test this experiment
          </p>
        </div>
        <div className="cv-hackathons">
          <h1>Hackathons</h1>
          <p>
            Avigilon Hackathon Participant |Vancouver, Canada |July 2017 •
            Created an adapter that can add pan and tilt functionality to
            any camera • Used 3D printing for the frame, controlled stepper
            motors with an Arduino and Bluetooth module via an android app
            Global AI Hackathon Participant |Vancouver, Canada |June 2017 •
            Program outputs the average emotion of a particular event or
            hashtag using Microsoft Cognitive Services Emotion API along
            with Instagram's API Techstars Hackathon 2nd Place |California,
            USA |July 2017 Created an website to provide live and historical
            data on publicly traded companies NASA space apps Hackathon
            participant |California, USA |July 2017 Used satellite data for
            data visualization to catered to individuals in non-stem fields.
          </p>
        </div>
      </div>;
  }
}

export default withRouter(CV);
