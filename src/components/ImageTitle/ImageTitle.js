import "./ImageTitle.css";
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import IndeterminateCheckBoxSharpIcon from '@mui/icons-material/IndeterminateCheckBoxSharp';

import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const ImageTitle = (props) => {
    const style = {
        margin: "0px"
    }

    const buttonSymbol =  props.showText ? 
        <ArrowBackSharpIcon style={style}/>
        :
        <ArrowForwardSharpIcon style={style}/>

    return (
        <div className="image-title" onClick={props.toggleShowText}>
            <p>{props.title}</p>
            { props.description ? buttonSymbol : null }
        </div>
    )
}

export default ImageTitle;