import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {

  }

  render() {
    return <div className="cv cv-expand">
        {/* <div className="cv-splash">
          <Particles params={{ particles: { number: { value: 200, density: { enable: false, value_area: 1500 } }, line_linked: { enable: true, distance: 150, width: 1, color: "#000000", opacity: 0.1 }, color: { value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] }, size: { value: 10, random: true, anim: { speed: 4, size_min: 0.3 } }, opacity: { anim: { enable: true, speed: 1, opacity_min: 0.5 } } }, interactivity: { events: { onclick: { enable: true, mode: "push" }, onhover: { enable: true, mode: "bubble" } }, modes: { push: { particles_nb: 1 }, bubble: { size: 20, distance: 40 } }, detect_on: "window" }, polygon: { enable: false, type: "inside", move: { radius: 10 }, url: "./images/Untitled-1.svg", draw: { enable: true, stroke: { color: "black" } } }, retina_detect: false }} />
        </div> */}
        <div className="cv-aboutme">
          <img src="./images/MePicture.png" alt="" />

          <p>
            I am currently in my first year of Masters in Mechanical & Mechatronics Engineering at the University of Waterloo in Waterloo, Canada. I have an insatiable curiosity and enjoy learning new skills. My hobbies include photography, travelling, playing sports, and designing. <br />
            <br />I love bringing an idea into existence. This may be through the design and construction of physical products, or to develop and create a software program. The problem solving and creative process is remarkably similar between the two, and I sincerely enjoy them. I've worked in a variety of engineering positions, and have learned lifelong skills from my workplace and my colleagues.
          </p>
        </div>

        <div className="cv-EE">
          <h1>Education and Experience</h1>
          <br />
          <br />
          <ul className="cv-timeline">
            <li>
              <div className="cv-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="cv-title">
                <h3>University of Waterloo </h3>
                <h4>
                  Masters in Mechanical & Mechatronics Engineering, Graduate
                  Diploma in Design, Co-op
                </h4>
                <div className="cv-date">Sept 2018 - Apr 2020</div>
              </div>
              <ul>
                <p>Description of Masters?</p>
              </ul>
            </li>
            <li>
              <div className="cv-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="cv-title">
                <h3>App Academy</h3>
                <h4>Full Stack Web Development</h4>
                <div className="cv-date">May 2018 - Aug 2018</div>
              </div>
              <ul>
                <p>
                  Intensive coding bootcamp focused on full stack web
                  development using Ruby on Rails, Nodejs, and React
                  frameworks.{" "}
                </p>
              </ul>
            </li>
            <li>
              <div className="cv-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="cv-title">
                <h3>University of Alberta</h3>
                <h4>
                  Bachelors in Mechanical Engineering, Biomedical option,
                  Minor in Meathematics, Co-op
                </h4>
                <div className="cv-date">Sept 2013 - Apr 2018</div>
              </div>
              <ul>
                <p>Description of Bachelors?</p>
                Awards:
                <li>
                  Louise McKinney Scholarship (top 1.5-2% in Mech. Eng.)
                </li>
                <li>NSERC USRA Research Award</li>
                <li> Dean’s Research Award</li>
                <li>U of A Academic Excellence</li>
              </ul>
            </li>
            <li>
              <div className="cv-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="cv-title">
                <h3>Avigilon Corporation</h3>
                <h4>Mechanical Designer Co-op</h4>
                <h4>Vancouver, Canada</h4>
                <div className="cv-date">Jan 2017 - Aug 2017</div>
              </div>
              <ul>
                <li>
                  Recommended components based on performance and cost
                  testing, resulting in a total cost saving of ~$150k/year
                </li>
                <li>
                  {" "}
                  Performed First Article Inspection (FAI/FPI) on injected
                  molded plastics and die cast aluminum to determine if
                  parts have the correct dimensional tolerance and suitable
                  surface finish for production{" "}
                </li>
                <li>
                  Received RMA products and performed root cause analysis
                  (RCA) to diagnose and fix issues
                </li>
                <li>
                  Conducted thermal, impact, water and stress tests on
                  cameras to determine performance of components and
                  possible improvements
                </li>
                <li>
                  Designed, fabricated and tested manufacturing jigs and
                  fixtures
                </li> <li>
                  Created extensive documentation for the assembly &
                  operation of the jig
                </li>
                <li>
                  Communicated with manufacturers locally and overseas to
                  modify and update OEM parts and assemblies of orders
                  around 25k/year
                </li>
              </ul>
            </li>
            <li>
              <div className="cv-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="cv-title">
                <h3> Institute of Design, Robotics and Optimization</h3>
                <h4>Research Co-op</h4>
                <h4>Leeds, United Kingdom</h4>
                <div className="cv-date">May 2016 - Aug 2016</div>
              </div>
              <ul>
                <li>
                  Designed, prototyped and tested a deployment mechanism for
                  a drone (octocopter) to release autonomous robots
                </li>
                <li>
                  Mechanism designed to release multiple robots at different
                  times using a single servo motor to optimize weight and
                  power consumption
                </li>
              </ul>
            </li>
            <li>
              <div className="cv-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="cv-title">
                <h3>Orthodontic Biomechanics Development Group </h3>
                <h4>Research Co-op</h4>
                <h4>Edmonton, Canada</h4>
                <div className="cv-date">May - Aug 2015</div>
              </div>
              <ul>
                <li>
                  Researched, designed and assembled a dual camera optical
                  apparatus to measure the 3D deformation in orthodontics{" "}
                </li>
                <li>
                  Purchased equipment and accessories based on specification
                  and budget
                </li>
                <li>
                  Coded in LabWindows/CVI to communicate between hardware
                  components
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="cv-skills">
          <h1>Computer Skills</h1>
          <div>
            <div>
              Design SolidWorks (CAD/Simulation) Analysis Ansys (FEA & CFD),
              PTC Mathcad, SMath Hardware Integration NI LabWindows/CVI
              (similar to LabVIEW) Microsoft Office Suite: Word, Excel,
              PowerPoint
            </div>
            <div>
              Programming Languages MATLAB, R (Statistics), Ruby,
              JavaScript, SQL Proficient in HTML, Python and C Product
              Lifecycle Management: Agile Issue and Project Tracking: JIRA,
              SCRUM
            </div>
          </div>
        </div>
        <div className="cv-competitions">
          <h1>Competitions & Hackathons</h1>
          <div className="Hacks">
          <div className="Hack-UAEC">
          <img className="Hack-img" src="./images/BrassGuitar.jpg" alt=""/>
            <p>
              UAEC Senior Design Competition (VEX Robotics) 1st Place
            |Edmonton, Canada
              </p> 
          </div>
        <div className="Hack-MSC">
            <img className="Hack-img" src="./images/BrassGuitar.jpg" alt="" />
           <p>
             Microsoft Coding Competition 2nd Place |Edmonton, Canada
             </p> 
          </div>
        <div className="Hack-GOOG">
            <img className="Hack-img" src="./images/BrassGuitar.jpg" alt="" />
           <p>
             Techstars Hackathon 2nd Place |California,
          USA |July 2017 Created an website to provide live and historical
          data on publicly traded companies
             </p> 
          </div>
          </div>
          <br/>
          <p>
            <a href="">Click here to show more</a>
            Western Engineering Competition Participant |Banff, Canada |Jan
            2018 UAEC Senior Design Competition (VEX Robotics) 1st Place
            |Edmonton, Canada |Oct 2017 Microsoft Coding Competition 2nd
            Place |Edmonton, Canada |Sept 2017 ENCMP Programming Competition
            2nd Place |Edmonton, Canada |Mar 2014 Avigilon Hackathon Participant |Vancouver, Canada |July 2017 •
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
        {/* <div className="cv-hackathons">
          <h1>Hackathons</h1>
          <p>
          
          </p>
        </div> */}

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
        <div className="cv-hobbies">
          <h1>Hobbies (possibly split into sports)</h1>
          <div className="Hobby">
        <div className="Hobby-Sports">
            <img className="Hobby-img" src="./images/BrassGuitar.jpg" alt="" />
          <p>
            Hobbies High School Senior Soccer & Curling Team Community
            Basketball & Badminton Team Other Sports: golfing, skiing,
            surfing
             </p>
        </div>
        <div className="Hobby-Photos">
            <img className="Hobby-img" src="./images/BrassGuitar.jpg" alt="" />
          <p>
           Photography
             </p>
        </div>
        <div className="Hobby-Travel">
            <img className="Hobby-img" src="./images/BrassGuitar.jpg" alt="" />
          <p>
           Travel
             </p>
        </div>
          </div>
        </div>
        {/* <div className="cv-otherinfo">
          <h1>Other Information</h1>
          <p>
          Advanced Class 5 (Non-GDL) driver’s license with access to a
            vehicle ACSA CSTS-09 – Safety Course Certification (WHMIS, First
            Aid, PPE, etc.) Youth Toastmaster’s certificate
          </p>
        </div> */}
        <div className="cv-volunteering">
          <h1>Volunteering</h1>
          <p>
            University of Alberta Engineering Student Society |2014-2016
            Misericordia Community Hospital Creative Care & Book Cart
            |2009-2014 YMCA Assistant Swim Instructor |2010
          </p>
        </div>
      </div>;
  }
}

export default withRouter(CV);
