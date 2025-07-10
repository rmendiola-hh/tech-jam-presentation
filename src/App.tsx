import React from 'react';
import { Presentation } from './components/Presentation';
import { sampleSlides } from './data/slides';

function App() {
  return <Presentation slides={sampleSlides} />;
}

export default App;
