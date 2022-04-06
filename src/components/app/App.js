import React from 'react';
import Navbar from '../navBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';

import Home from '../../pages/PageHome';
import About from '../../pages/PageAbout';
import Contact from '../../pages/PageContact';
import Blogs from '../../pages/PageBlog';
import Menu from '../../pages/PageMenu';

 
function App() {
    return (
        
        <AppHeader />
    );
}
     
export default App;