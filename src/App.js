import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

   const showAlert = (message,type) => {
      setAlert(
        {msg : message,
        type: type}
      )
      setTimeout(() => {
          setAlert(null);
      },2000);
  }

  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light  mode has been set","success");
      document.title = "TextUtils - Light Mode" ;
    }else {
      setMode('dark');
      document.body.style.backgroundColor='#042743'; //'#212529' // grey
      showAlert("Dark mode has been set","success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = 'Textutils is amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install textUtils Now';
      // },1500);
    }
    
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />      
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact   path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
      </div>
      <div className="container my-3">
      {/* <About /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
