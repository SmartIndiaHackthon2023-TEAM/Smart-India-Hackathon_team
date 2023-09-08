import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Signup.jsx";
import SignIn from "./SignIn.jsx";
import {CheckUrl} from "./CheckUrl.jsx";
import {LandingPage} from "./LandingPage.jsx";
import {CheckEmail} from "./CheckEmail.jsx";
function App() {
    return (
            <div>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<LandingPage />} />
                        <Route path={"/email"} element={<CheckEmail />} />
                        <Route path={"/url"} element={<CheckUrl />} />
                        <Route path={"/signin"} element={<SignIn />} />
                        <Route path={"/signup"} element={<Signup />} />
                    </Routes>
                </Router>
            </div>
  )
}

export default App
