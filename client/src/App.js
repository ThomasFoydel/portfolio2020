import React from 'react';
import NavBar from 'components/navbar/NavBar';
import ParallaxPage from 'components/parallaxpage/ParallaxPage';

import Store from 'context/Store';

import './App.scss';

function App() {
  return (
    <Store>
      <div className='App'>
        <NavBar />
        <ParallaxPage />
      </div>
    </Store>
  );
}

export default App;
