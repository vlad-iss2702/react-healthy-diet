import { NavLink } from 'react-router-dom';

import './appBlogList.scss';

import blogOne from '../../../resources/img/main/blog/blog-1.png';
import blogTwo from '../../../resources/img/main/blog/blog-2.png';
import blogThre from '../../../resources/img/main/blog/blog-3.png';

const AppBlogList = () => {
    return (
        <div className="blog-list">
            <div class="blog-items">
                <div class="blog-item">
                    <div class="blog-item-img">
                        <img src={blogOne} alt="" />
                        <section><span>15</span> <p>Янв</p></section>
                    </div>
                    <div class="blog-item-info">
                        <h4><NavLink to="/single-blog">Google inks pact for new 35-storey office</NavLink></h4>
                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-item-img">
                        <img src={blogTwo} alt="" />
                        <section><span>15</span> <p>Янв</p></section>
                    </div>
                    <div class="blog-item-info">
                        <h4><NavLink to="/single-blog">Google inks pact for new 35-storey office</NavLink></h4>
                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-item-img">
                        <img src={blogThre} alt="" />
                        <section><span>15</span> <p>Янв</p></section>
                    </div>
                    <div class="blog-item-info">
                        <h4><NavLink to="/single-blog">Google inks pact for new 35-storey office</NavLink></h4>
                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-item-img">
                    <img src={blogOne} alt="" />
                        <section><span>15</span> <p>Янв</p></section>
                    </div>
                    <div class="blog-item-info">
                        <h4><NavLink to="/single-blog">Google inks pact for new 35-storey office</NavLink></h4>
                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                    </div>
                </div>
            </div>
            <div class="blog-pagination">
                <ul>
                    <li><a href=""><i class="icon-angle-left"></i></a></li>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href=""><i class="icon-angle-right"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default AppBlogList;