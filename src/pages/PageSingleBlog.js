import React from 'react';

import AppSingleBlog from '../components/appBlog/appSingleBlog/AppSingleBlog';

import bannerFive from '../resources/img/main/banner5.jpeg';
 
const Singleblog = () => {
  return (
    <>
      <div class="title-back" style={{ backgroundImage: `url(${bannerFive})` }}>
        <h1>Контент поста</h1>
      </div>
      <AppSingleBlog />
    </>
  );
};
 
export default Singleblog;