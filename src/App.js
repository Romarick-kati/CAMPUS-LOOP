
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Reservation from './Pages/Reservation';
import Blog from './Pages/Blog';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import LoginSignup from './Pages/LoginSignup'; 
function App() {
  return (
    <div>
     <Router>
     <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/reservation" element={<Reservation/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/contact-us" element={<ContactUs/>} />
                <Route path="/login" element={<LoginSignup/>} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
