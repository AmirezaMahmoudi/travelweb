import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/page/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
