import { useRef, useState, useEffect } from "react";
import UnsplashImages from "../../TEST/TESTFILE.js"
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import "./Article.css";
import SeeTextBtn from "../SeeTextBtn/SeeTextBtn.js";

const Article = (props) => {

  const {src, title, description} = UnsplashImages[props.val]
  const [btnClicked, setBtnClicked] = useState(false)
  const toggleText = () => {
    setBtnClicked(prev => !prev)
  }

  const [imgHeight, setImgHeight] = useState(0)
  const [alignItems, setAlignItems] = useState(0)
  useEffect(() => {
      const heights = [45, 50, 55, 70]
      const randInt = Math.floor((Math.random() * 4))
      setImgHeight(heights[randInt])

      const position = ["flex-start", "center", "flex-end"]
      const randPos = Math.floor((Math.random() * 3))
      setAlignItems(position[randPos])
  }, [])

  return (
    <div className="article" style={{alignItems: `${alignItems}`}}>
      <div className="article__main">

        <div className="article__visible">
          <img src={src} style={{height: `${imgHeight}vh`}}/>
          {title ? <SeeTextBtn title={title} btnClicked={btnClicked}/> : null}
        </div>
        

        <p className={ `article__text ${btnClicked ? "article__text-visible" : "article__text-hidden" }`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Article;










