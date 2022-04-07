import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import PageHome from '../../pages/PageHome';
import PageAbout from '../../pages/PageAbout';
import PageBlog from '../../pages/PageBlog';
import PageContact from '../../pages/PageContact';
import PageMenu from '../../pages/PageMenu';
import PageSingleBlog from '../../pages/PageSingleBlog';
import AppFooter from '../appFooter/AppFooter';

import {Routes, Route} from 'react-router-dom';


import './app.scss';
import '../appHeader/appHeader.scss';

import headerLogo from '../../resources/img/logo-3.png';
 
function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<PageHome />}>Главная</Route>
        <Route path="/about" element={<PageAbout />}></Route>
        <Route path="/menu" element={<PageMenu />}></Route>
        <Route path="/blog" element={<PageBlog />}></Route>
        <Route path="/contact" element={<PageContact />}></Route>
        <Route path="/single-blog" element={<PageSingleBlog />}></Route>
      </Routes>
      <AppFooter />
    </>
  )
}
     
export default App;