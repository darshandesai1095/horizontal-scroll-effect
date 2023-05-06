import './Animation1.css';
import { useState, useEffect, useRef } from 'react';
import UnsplashImages from '../../../TEST/TESTFILE.js';
import ImageCard1 from '../../ImageCards/ImageCard1/ImageCard1';

function Animation1( { xOffset } ) {

    const r1 = useRef(null)
    const r2 = useRef(null)
    const [r1Width, setR1Width] = useState(0)
    const [r2Width, setR2Width] = useState(0)
    const [screenWidth, setScreenWidth] = useState(0)
    const [scrollX, setScrollX] = useState(0)
    const [translateX, setTranslateX] = useState(0)

    console.log( "xOffset: ", xOffset )

    useEffect(() => {

        setR1Width(r1.current.offsetWidth)
        setR2Width(r2.current.offsetWidth)
        setScreenWidth(window.innerWidth)
        setScrollX(window.pageXOffset)

        setTranslateX(() => {
            const rowDiff = r1Width - r2Width
            const translate = (rowDiff * xOffset )/(r1Width-screenWidth)
            if (translate < 6) {return 0}
            return translate > rowDiff ? rowDiff : translate
        })

    }, [r1Width, r2Width, screenWidth, xOffset])

    const imagesRow1 = UnsplashImages.map( (img, i) => {
            return (
                <ImageCard1 
                    key={`${i}`} 
                    src={`${img.src}`}
                    description={img.description}
                /> 
            )
    })

    const imagesRow2 = UnsplashImages.map( (img, i) => {
        if (i%2 === 0) {
            return (
                <ImageCard1 
                    key={`${i}`} 
                    src={`${img.src}`}
                    description={img.description}
                /> 
            )
        }
    })

    return (
        <div className="App" >
            <div className="masonry-grid">

                <div className="masonry-grid-row" 
                    ref={r1}>
                        {imagesRow1}  
                </div>

                <div className="masonry-grid-row" 
                    ref={r2} 
                    style={{transform: `translateX(${translateX}px)`}}>
                        {imagesRow2}   
                </div>

            </div>
        </div>
    );
}

export default Animation1;