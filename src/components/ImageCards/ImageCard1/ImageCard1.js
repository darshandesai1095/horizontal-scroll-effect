import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './ImageCard1.css';

function ImageCard1(props) { 


    // get width of image and set width of p to image width

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

    const [isVisible, setIsVisible] = useState(false)
    const { ref, inView } = useInView({
      threshold: 0,
      triggerOnce: false
    })

    useEffect(() => {
        if (inView) {
          setIsVisible(true)
        }

        return () => {setIsVisible(false)}

      }, [inView]);


    return (
        <div className="ic1" style={style} ref={ref}>

            <img className='ic1__image'
                 ref = {image}
                 src={`${props.src}`}
                 alt="image"
            />

            {
                props.description ? 

                <div className={`ic1__text-bounding ${isVisible ? 'ic1__animate' : ''}`}>
                    <p>
                        {props.description}
                    </p>
                </div>

            :

                null

            }

        </div>
    )
}

export default ImageCard1;



