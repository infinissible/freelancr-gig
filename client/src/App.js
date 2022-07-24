// import logo from './logo.svg';
import { useState, useEffect } from "react";
import  HomePage  from "./components/homePage";
// import { Header } from "./components/header";
// import { Developers } from "./components/developers";
// import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";





function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
    <HomePage data={landingPageData.homePage} />
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
