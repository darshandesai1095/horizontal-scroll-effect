import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';

function App() {

  
  return (
      <div className="App">
        <div className="masonry-grid">
        <ParallaxProvider>
          <Parallax 
              // speed={-4}
              translateY={[0, 0]}
              >
            <div className="masonry-grid-row red">
              <p>div 1 content</p>
            </div>
          </Parallax>
          <Parallax  
                      // speed={-5}
                      translateY={[0, 50]}
                      // easing="easeInQuad"
                      >
            <div className="masonry-grid-row blue">
              <p>div 2 content</p>
            </div>
          </Parallax>
          </ParallaxProvider>
        </div>
      </div>
  );
}

export default App;
