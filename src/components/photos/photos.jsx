import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {

  }

  render() {
    return (
    <div className="photography">
        <h1>This is my Photography</h1>
    </div>
    );
  }
}

export default withRouter(Photos);
