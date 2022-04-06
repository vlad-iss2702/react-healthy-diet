import React from 'react';
import MainSlider from '../mainSlider/MainSlider';
import MainContent from '../mainContent/MainContent';
import MainVideo from '../mainVideo/MainVideo';
import MainReview from '../mainReview/MainReview';

import './app.scss';
 
function App() {
  return (
    <main>
      <MainSlider />  
      <MainContent />
      <MainVideo />
      <MainReview />
    </main>
  )
}
     
export default App;