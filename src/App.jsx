import "./App.css";
import {Routes,Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/Signin'
import Forgot from './pages/forgot/Forgot'

function App() {
  return (
    <Routes>

    <Route path="/login" element= {<Signin />} />
    <Route path="/signup" element= {<Signup />}  />
    <Route path="/forgot" element= {<Forgot /> } />
    <Route path="/" element = {<Home /> }  />
  </Routes>
  );
}

export default App;