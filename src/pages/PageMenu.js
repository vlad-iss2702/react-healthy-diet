import React from 'react';
import ContentMenu from '../components/mainContent/contentMenu/ContentMenu';
import ContentPresent from '../components/mainContent/contentPresent/ContentPresent';
import MainReview from '../components/mainReview/MainReview';
import MainGallery from '../components/mainGallery/MainGallery';

import './pages.scss';

import indexBack from '../resources/img/vegan_bg.png';
import bannerFour from '../resources/img/main/banner4.jpg';

const Menu = () => {
  return (
    <>
      <div class="title-back" style={{ backgroundImage: `url(${bannerFour})` }}>
        <h1>Меню</h1>
      </div>
      <div className="index-back" style={{ backgroundImage: `url(${indexBack})` }}>
        <ContentMenu />
        <ContentPresent />
      </div>
      <MainReview />
      <MainGallery />
    </>
  );
};
 
export default Menu;