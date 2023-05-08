import { useRef, useState, useEffect } from "react";
import "./App.css";
import UnsplashImages from "./TEST/TESTFILE.js"
import Article from "./components/Article/Article";

const App = () => {


  return (
    <div className="App">
      <div className="main-content">
        <Article val={0}/>
        <Article val={1}/>
        <Article val={2}/>
        <Article val={3}/>
        <Article val={4}/>
        <Article val={5}/>
        <Article val={6}/>
        <Article val={7}/>
        <Article val={8}/>
        <Article val={9}/>
        <Article val={10}/>
        <Article val={11}/>
        <Article val={12}/>
        <Article val={13}/>
        <Article val={14}/>
      </div>
    </div>
  );
}

export default App;










