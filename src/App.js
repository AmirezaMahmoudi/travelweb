import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/page/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
