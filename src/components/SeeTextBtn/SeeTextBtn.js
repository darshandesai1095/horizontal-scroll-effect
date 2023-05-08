import { useRef, useState, useEffect } from "react";
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import IndeterminateCheckBoxSharpIcon from '@mui/icons-material/IndeterminateCheckBoxSharp';
import "./SeeTextBtn.css";

const SeeTextBtn = (props) => {


  return (

    <div className="see-text-btn">
        <p className="see-text-btn__title">
          {props.title}
        </p>

        {
          props.btnClicked ?
          <IndeterminateCheckBoxSharpIcon/>
          :
          <AddBoxSharpIcon/>
        }

    </div>
  )
}

export default SeeTextBtn;










