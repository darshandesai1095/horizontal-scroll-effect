import { useState, useMemo, useRef, useEffect } from "react";
import "./Article.css";
import ImageTitle from "../ImageTitle/ImageTitle.js";
import Image from "../Image/Image.js";
import ImageText from "../ImageText/ImageText.js";
import { motion } from "framer-motion";


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



  return (
    <>
      <motion.div
          transition={{ type: 'spring', duration: 0.8 }}
      >
      <div className="article" style={{alignSelf: `${articlePosition}`}}>
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
      </motion.div>
    </>
  )
}

export default Article