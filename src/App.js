import { useRef, useState, useEffect } from "react";
import "./App.css";

const App = () => {

  const appRef = useRef(null)
  const [xOffset, setXOffset] = useState(0)

  const handleScroll = (event) => {
    console.log(appRef.current.scrollLeft)
    appRef.current.scrollLeft += event.deltaY
    setXOffset(appRef.current.scrollLeft)
  }

  return (
    <div className="App" ref={appRef} onWheel={handleScroll}
         style={{ overflowX: "scroll" }}>
      <div className="content">
      
      </div>
    </div>
  );
}

export default App;










