import { useRef, useState, useEffect } from "react";
import "./App.css";
import UnsplashImages from "./TEST/TESTFILE.js"
import Article from "./components/Article/Article";
import Heading from "./components/Heading/Heading";
import Navigation from "./components/Navigation/Navigation";

const App = () => {


  const [scrollLeft, setScrollLeft] = useState(0);
  const handleScroll = (event) => {
    // event.preventDefault()
    const delta = event.deltaY
    const container = document.getElementById("container")
    container.scrollLeft -= delta
    setScrollLeft(container.scrollLeft)
  }

  // https://appellemoipapa.fr/
  

  const images = UnsplashImages.map((img, i) => {
    return (
      <Article
        scrollLeft={scrollLeft}
        key={i}
        src={img.src}
        title={img.title}
        description={img.description}
      />
    )
  })

  return (
    <div className="App" id="container"  onWheel={handleScroll} >
      <Navigation/>
      <Heading scrollLeft={scrollLeft}/>
      <div className="main-content">
        {images}
      </div>
    </div>
  );
}

export default App;
