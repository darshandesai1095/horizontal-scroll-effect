import { useRef, useState, useEffect } from "react";
import "./App.css";
import UnsplashImages from "./TEST/TESTFILE.js"
import Article from "./components/Article/Article";
import Heading from "./components/Heading/Heading";

const App = () => {

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
    <div className="App">
        <Heading/>
      <div className="main-content">
        {images}
      </div>
    </div>
  );
}

export default App;
