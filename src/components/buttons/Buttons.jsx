import React from "react";
import "./buttons.css";

function Buttons(props) {
  return <button {...props} className={"button " + props.className} />;
}

export default Buttons;
