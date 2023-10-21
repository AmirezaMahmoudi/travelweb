import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/page/Home';
import Footer from './components/Footer/Footer';
import Tourism from './components/page/Tourism';
import Tour from './components/page/Tour';
import SignUp from './components/page/SignUp';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/tourism" exact Component={Tourism}></Route>
        <Route path="/tour" exact Component={Tour}></Route>
        <Route path="/sign-up" exact Component={SignUp}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
