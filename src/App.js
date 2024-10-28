import './App.css';
import Best from './Components/Best';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Popular from './Components/Popular';
import Login from './Components/ModalLogin'; // Import your Login component
import { useState } from 'react';

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false); // State to control login modal

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onLoginClick={handleLoginClick} /> {/* Pass function to Navbar */}
        <Home />
        <Cards />
        <Best />
        <Popular />
        <Footer />
        {isLoginOpen && <Login onClose={handleCloseLogin} />} {/* Conditional rendering of the modal */}
      </BrowserRouter>
    </div>
  );
}

export default App;
