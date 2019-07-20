import React from 'react';
import './App.css';
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className='background'>
      <div className="App">
        <div className="header">
          <h1 className='title'>Hooper Irrigation Co</h1>
        </div>
        <Content />
      </div>
        <Footer/>
    </div>
  );
}

export default App;
