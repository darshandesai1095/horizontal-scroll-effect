import './Animation1.css';
import { useState, useEffect, useRef } from 'react';

function Animation1() {

  const r1 = useRef()
  const r2 = useRef()
  const [r1Width, setR1Width] = useState(0)
  const [r2Width, setR2Width] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      setR1Width(r1.current.offsetWidth)
      setR2Width(r2.current.offsetWidth)
      setScreenWidth(window.innerWidth)
      setScrollX(window.pageXOffset)

      setTranslateX(() => {
        const rowDiff = r1Width - r2Width
        const translate = (rowDiff*scrollX)/(r1Width-screenWidth)
        if (translate < 5) {return 0}
        return translate > rowDiff ? rowDiff : translate
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    };

  }, [r1Width, r2Width, screenWidth, window.pageXOffset])

  

  return (
    <div className="App" >
      <div className="masonry-grid">

          <div className="masonry-grid-row row-1" 
               ref={r1}>
                <img className="image" src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682880279219-5e1434044a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682842098670-ace3aa03f719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682700372119-319bfaec164e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682936496532-00429ddd7b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://plus.unsplash.com/premium_photo-1681401570651-4e38f12952b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682842098670-ace3aa03f719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682700372119-319bfaec164e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682936496532-00429ddd7b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682880279219-5e1434044a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60"/>
          </div>

          <div className="masonry-grid-row row-2" 
               ref={r2} 
               style={{transform: `translateX(${translateX}px)`}}>
                <img className="image" src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682700372119-319bfaec164e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682936496532-00429ddd7b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://plus.unsplash.com/premium_photo-1681401570651-4e38f12952b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682842098670-ace3aa03f719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682700372119-319bfaec164e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682936496532-00429ddd7b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"/>
                
          </div>

      </div>
    </div>
  );
}

export default Animation1;


