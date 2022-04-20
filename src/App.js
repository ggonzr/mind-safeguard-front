import Questions from "./views/Questions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import About from "./views/About";


function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate replace to="/about" />} />
                <Route path="/about" element={<About />} />
                <Route path="/dass" element={<Questions />} />
            </Routes>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
