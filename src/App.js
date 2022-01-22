
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';

import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setbtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setbtnText('Enable Light Mode')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark! mode enabled", "success")
      document.title = "TEXTUtility - Dark mode"

    } else {
      setMode('light')
      setbtnText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light! mode enabled", "success")
      document.title = "TEXTUtility - Light mode"
    }
  }

  return (
    <>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} btnText={btnText} />
      <Alert alert={alert} />
      <div className="container my-3">

        <Routes>
          <Route path="/" element={
            <TextForm heading="Enter text" mode={mode} />}
          />
          <Route path="/home" element={<TextForm heading="Enter text" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
