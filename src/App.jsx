// import './App.css'
import { useState } from 'react'
import { LandingPage } from './ReactComponents/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './ReactComponents/SignIn';
import Signup from './ReactComponents/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
                <Router>
                    
                    <Routes>
                        <Route path={"/"} element={<LandingPage/>}/>
                        <Route path={"/signin"} element={<SignIn/>} />
                        <Route path={"/signup"} element={<Signup/>} />
                    </Routes>
                </Router>
            </div>
  )
}

export default App
