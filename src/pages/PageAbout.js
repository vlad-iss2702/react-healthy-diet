import React from "react";

import ContentAbout from '../components/mainContent/contentAbout/ContentAbout';
import MainReview from '../components/mainReview/MainReview';
import MainGallery from '../components/mainGallery/MainGallery';

import indexBack from '../resources/img/vegan_bg.png';
import bannerThre from '../resources/img/main/banner3.jpg';
 
const About = () => {
    return (
      <>
        <div class="title-back" style={{ backgroundImage: `url(${bannerThre})` }}>
          <h1>О нас</h1>
        </div>
        <div className="index-back" style={{ backgroundImage: `url(${indexBack})` }}>
          <ContentAbout />
        </div>
        <MainReview />
        <MainGallery /> 
      </>
    )
};
 
export default About;