import React from 'react';
import AppBlog from '../components/appBlog/AppBlog';

import bannerFour from '../resources/img/main/banner4.jpg';
 
const Blogs = () => {
  return (
    <>
      <div class="title-back" style={{ backgroundImage: `url(${bannerFour})` }}>
        <h1>Блог</h1>
      </div>
      <AppBlog />
    </>
  );
};
 
export default Blogs;