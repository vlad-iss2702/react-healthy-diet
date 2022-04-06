import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import PageHome from '../../pages/PageHome';
import AppFooter from '../appFooter/AppFooter';


import './app.scss';
 
function App() {
  return (
    <>
      <AppHeader />
      <PageHome />
      <AppFooter />
    </>
  )
}
     
export default App;