import { useMemo } from "react";
import "./Image.css";

const Image = (props) => {

    const height = useMemo(() => {
        const imgHeights = [40, 50, 60, 70, 80]
        const rand = Math.floor(Math.random() * imgHeights.length)
        return imgHeights[rand]
    }, [])

    const imgStyle = {
        height: `${height}vh`,
        borderRadius: "0px"
    }

    return (
        <div className="image">
            <img 
                style={imgStyle}
                src={`${props.src}`}
            />
        </div>
    )
}

export default Image;