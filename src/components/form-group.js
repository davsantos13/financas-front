import React from "react";

export default function FormGroup(props) {
  return (
    <div className="form-group">
      <label>{props.label} </label>
      {props.children}
    </div>
  );
}
