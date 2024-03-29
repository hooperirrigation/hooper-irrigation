import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import routes from './routes'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import logo from './Assets/hic-logo2.png'

function App() {
  return (
      <div className="App">
        <div className="overlay">
        <HashRouter basename='/'>
          <div className="header">
            <Link to='/'>
              <img className='logo' src={logo} alt="" />
            </Link>
            <Nav />
          </div>
          {routes}
        </HashRouter>
        <Footer />
        </div>
      </div>
  );
}

export default App;
