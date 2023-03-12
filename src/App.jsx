import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Timer from './components/Timer'
import BreakPage from "./pages/BreakPage";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/break" element={<BreakPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
