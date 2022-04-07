import React from 'react';
import AppContact from '../components/appContact/AppContact';

import bannerTwo from '../resources/img/main/banner2.jpg';
 
const Contact = () => {
  return (
    <>
      <div class="title-back" style={{ backgroundImage: `url(${bannerTwo})` }}>
        <h1>Контакты</h1>
      </div>
      <AppContact />
    </>
  );
};
 
export default Contact;