import React from 'react';

import './App.css';

import { ThinNav } from './components/ThinNav/ThinNav';
import { Welcome } from './components/Welcome/Welcome';
import Staff from './components/Staff/Staff';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import MobileHours from './components/MobileHours/MobileHours';

function App() {
  return (
    <>
      <ThinNav />
      <Welcome />
      <Staff />
      <Services />
      <MobileHours />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
