import './App.css';
import { useRef, useState } from 'react';
import Animation1 from './components/Animations/Animation1/Animation1';
import NavBar from './components/NavBar/NavBar';

function App() {  // refresh screen if resize detected

  const appRef = useRef(null)
  const [xOffset, setXoffset] = useState()
  const handleScroll = (event) => {
    // event.preventDefault()
    appRef.current.scrollLeft += event.deltaY
    setXoffset(appRef.current.scrollLeft)
  }

  return (
    <div className="App" 
         ref={appRef}
         onWheel={handleScroll}
         style={{ overflowX: "scroll"}}
    >
      <NavBar/>
      <Animation1 xOffset={xOffset || 0}/>
    </div>
  );
}

export default App;


