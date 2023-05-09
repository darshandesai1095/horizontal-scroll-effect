import "./ImageText.css";

const ImageText = (props) => {

  return (
    <div 
      className={`image-text ${props.showText ? "image-text--visible" : "image-text--hidden"}`}
      style={{justifyContent: `${props.flexPosition === "top" ? "flex-start" : "flex-end"}`}}
      >
        <p>
          {props.description}
        </p>
    </div>

  )
}

export default ImageText;