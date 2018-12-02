import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return <div className="landing">
      <div className="greeting">Hello,</div>
      <br />
      <div className="name">Nigel Rodrigues</div>
      <br />
      <div className="options">
        <Link to="/cv">
          <div className="cv">CV</div>
        </Link>
        <Link to="/cv">
          <div className="photography">Photography</div>
        </Link>
        <Link to="/cv" >
          <div className="projects">Projects</div>
        </Link>
        <Link to="/cv" >
          <div className="about">About</div>
        </Link>
        <Link to="/cv" >
          <div className="travel">Travel</div>
        </Link >
      </div>
    </div>;
};

export default landing;
