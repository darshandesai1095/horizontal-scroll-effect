import { useState, useEffect, useRef } from 'react';
import './ImageCard1.css';

function ImageCard1(props) { 


    // get width of image and set width of p to image width
    ///////////////////////////////////////////////////////

    const image = useRef(null)
    const [imageWidth, setImageWidth] = useState(0)
    const [style, setStyle] = useState({})

    useEffect(() => {
        setImageWidth(image.current.offsetWidth)
        setStyle({
            width: `${imageWidth}px`
        })

    }, [imageWidth])

    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////


    // create feature to crop text-box manually
    ///////////////////////////////////////////

    ///////////////////////////////////////////
    ///////////////////////////////////////////


    return (
        <div className="ic1" style={style}>

            <img className='ic1__image'
                 ref = {image}
                 src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
            />

            <div className="ic1__text-bounding" 
                //  style={{ clipPath: `polygon(0 0, ${50}% 0, ${50}% 100%, 0 100%)` }}
                 >
                <p >
                    Sint ipsum do reprehenderit pariatur fugiat
                    et tempor voluptate nostrud elit est ex.
                </p>
            </div>


        </div>
    )
}

export default ImageCard1;



