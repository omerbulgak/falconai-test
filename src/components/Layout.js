import React from "react";
import './Layout.css';

export default function Layout(props) {
  return (
    <div className="Layout">
      <div className="Layout_left">{props.left}</div>
      <div className="Layout_right">{props.right}</div>
    </div>
  );
}
