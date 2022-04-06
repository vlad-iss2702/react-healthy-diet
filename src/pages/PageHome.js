import React from 'react';

import MainSlider from '../components/mainSlider/MainSlider';
import MainContent from '../components/mainContent/MainContent';
import MainVideo from '../components/mainVideo/MainVideo';
import MainReview from '../components/mainReview/MainReview';
import MainGallery from '../components/mainGallery/MainGallery';
 
const Home = () => {
  return (
    <main>
      <MainSlider />  
      <MainContent />
      <MainVideo />
      <MainReview />
      <MainGallery />
    </main>
  );
};
 
export default Home;