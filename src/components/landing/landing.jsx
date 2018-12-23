import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return <div className="landing">
      <div className="greeting">Hello,</div>
      <br />
      <div className="name">Nigel Rodrigues</div>
      <br />
      <div className="options">
        <Link to="/cv"><div className="cv">CV</div></Link>
        <div className="photography">Photography</div>
        <div className="projects">Projects</div>
        <div className="about">About</div>
        <div className="travel">Travel</div>
      </div>
    </div>;
};

export default landing;
