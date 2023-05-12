import "./ImageTitle.css";

const ImageTitle = (props) => {
    const style = {

    }

    const buttonSymbol = props.showText ? 
        <p style={style}>&lt;</p>
        :
        <p style={style}>&gt;</p>

    return (
        <div className="image-title" onClick={props.toggleShowText}>
            <p style={style}>{props.title}</p>
            { props.description ? buttonSymbol : null }
        </div>
    )
}

export default ImageTitle;