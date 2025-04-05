import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Navbar from './Navbar';
import Home from './home';
import LoginPage from "./LoginPage";
import PageNotFound from "./PageNotFound";
import Signup from "./Signup";
import GrammerCheck from "./GrammerCheck";

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/grammer-check" element={<GrammerCheck />} />
          </Routes>
        </Router>
    </>
  )
}

export default App