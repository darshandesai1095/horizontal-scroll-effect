import { useState, useMemo } from "react";
import "./Article.css";
import ImageTitle from "../ImageTitle/ImageTitle.js";
import Image from "../Image/Image.js";
import ImageText from "../ImageText/ImageText.js";
import { useInView } from 'react-intersection-observer';

const Article = ( { scrollLeft, src, title, description } ) => {

  const [showText, setShowText] = useState(false)
  const toggleShowText = () => {
    setShowText(prev => !prev)
  }

  const titlePosition = useMemo(() => {
    const position = ["top", "bottom"]
    const rand = Math.floor( Math.random() * 2 )
    return position[rand]
  }, [])

  const articlePosition = useMemo(() => {
    const position = ["flex-start", "center", "flex-end"]
    const rand = Math.floor( Math.random() * position.length )
    return position[rand]
  }, [])

  const translate = useMemo(() => {
    if (articlePosition === "center") {
      const translateY = [-50, -25, 0, 25, 50]
      return translateY[Math.floor(Math.random() * translateY.length)]
    } 
    return 0
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.5, // trigger when element is at least 50% visible
    triggerOnce: true, // only trigger once
  });

  const parallaxSpeed = useMemo(() => {
    return inView ? Math.random() * scrollLeft : 0
  }, [inView])


  return (
    <>
      <div ref={ref} 
           className="article" 
           style={{ 
              alignSelf: `${articlePosition}`, 
              transform: `translateY(${translate}px)`
            }}>
        <div 
          className="article__main" 
          style={{flexDirection: `${titlePosition === "top" ? "column" : "column-reverse"}`}}>
          {
            title ?

            <ImageTitle
              title={title}
              toggleShowText={toggleShowText} 
              showText={showText}
              description={description}
            />

            : null
          }
          <Image src={src}/>
        </div>

        {
          description ? 
          <ImageText 
          showText={showText}
          flexPosition={titlePosition}
          description={description}
          /> 
          : null
        }
      </div>
    </>
  )
}

export default Article