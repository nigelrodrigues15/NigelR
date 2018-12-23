import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <div className="landing">
      <div className="greeting">Hello,</div>
      <br/>
      <div className="name">Nigel Rodrigues</div>
      <br/>
      <div className="options">
        <div>CV</div>
        <div>Photography</div>
        <div>Projects</div>
        <div>About</div>
        <div>Travel</div>
      </div>
    </div>
  );
};

export default landing;
