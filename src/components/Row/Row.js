import React from "react";
import "./row.css";
const Row = props =>
  <div className={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Row;