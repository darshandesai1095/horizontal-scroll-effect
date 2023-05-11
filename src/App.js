import { useRef, useState, useEffect } from "react";
import "./App.css";
import UnsplashImages from "./TEST/TESTFILE.js"
import Article from "./components/Article/Article";
import Heading from "./components/Heading/Heading";

const App = () => {

  const [scrollLeft, setScrollLeft] = useState(0);
  const handleScroll = (event) => {
    event.preventDefault(); // Prevent default page scrolling
    const delta = event.deltaY; // Get the scroll direction
    const container = document.getElementById("container"); // Get the container element
    container.scrollLeft += delta; // Adjust the scroll position based on the scroll direction
    setScrollLeft(container.scrollLeft); // Update the state variable
  }

  // https://appellemoipapa.fr/

  const images = UnsplashImages.map((img, i) => {
    return (
      <Article  
        key={i}
        src={img.src}
        title={img.title}
        description={img.description}
      />
    )
  })

  return (
    <div className="App" id="container"  onWheel={handleScroll} >
      <Heading/>
      <div className="main-content">
        {images}
      </div>
    </div>
  );
}

export default App;
