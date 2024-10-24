import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from "./components/Footer.js"
import Menu from "./pages/Menu.js"
import About from "./pages/About.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <div className="App">
 <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/about' element={<About />} />
        
      </Routes>
      <Footer />
   </Router>
  </div>
  );
}

export default App;
