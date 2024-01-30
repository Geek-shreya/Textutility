import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }

  const changeMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "rgb(63 63 70)";
      showAlert("Dark mode has been Enabled", "success")
      // setInterval(() => {
      //   document.title = "Textutility - Dark Mode"
      // }, 5000);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success")
    }
  }

  return (
  <>
  <Router>
      <Navbar about="About Us" mode={mode} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Switch>
            <Route exact path="/about">
              <About mode={mode} changeMode={changeMode} />
            </Route>
            <Route exact path="/">
              <Textarea heading="Enter text to analyze" mode={mode} changeMode={changeMode} showAlert={showAlert}/>
            </Route>
          </Switch>
     </div>
  </Router>
  </>
  );
}

export default App;
