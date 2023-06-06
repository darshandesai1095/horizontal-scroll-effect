import { useRef, useState, useEffect } from "react";
import "./Navigation.css";


const Navigation = () => {

  return (
    <div className="navigation">
        <div className="navigation__icon">⌑</div>
        <div className="navigation__icon">...<br/>...<br/>...</div>
        <div className="navigation__icon">||</div>
    </div>
  )
}

export default Navigation;
