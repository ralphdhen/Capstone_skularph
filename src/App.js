import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import LoginModal from './components/LoginModal';
import WhyChoose from './components/WhyChoose';

function App() {
  return (
    <div> 
      <Home />
      <WhyChoose />
      
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router> */}
    </div>
  );
}

export default App;
