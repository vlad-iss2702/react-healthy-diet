import './appBlogSidebar.scss';

import blogOne from '../../../resources/img/main/blog/blog-1.png';
import blogTwo from '../../../resources/img/main/blog/blog-2.png';
import blogThre from '../../../resources/img/main/blog/blog-3.png';

const AppBlogSidebar = () => {
    return (
        <div class="blog-sidebar">
            <div class="blog-sidebar__search blog-sidebar__back">
                <form action="">
                    <input type="text" placeholder="Поиск" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Поиск'" />
                    <button><i class="icon-search"></i></button>
                </form>
                <button class="blog-search__button-main">Найти</button>
            </div>
            <div class="blog-sidebar__category blog-sidebar__back">
                <h4>Категории</h4>
                <ul>
                    <li><a href="">Resaurant food</a></li>
                    <li><a href="">Travel news</a></li>
                    <li><a href="">Modern technology</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Inspiration</a></li>
                    <li><a href="">Health Care</a></li>
                </ul>
            </div>
            <div class="blog-sidebar__back">
                <h4>Последние новости</h4>
                <div class="blog-sidebar__post-item">
                    <div class="blog-sidebar__post-img">
                        <img src={blogOne} alt="" />
                    </div>
                    <div class="blog-sidebar__post-info">
                        <h4><a href="">From life was you fish...</a></h4>
                        <p>January 12, 2019</p>
                    </div>
                </div>
                <div class="blog-sidebar__post-item">
                    <div class="blog-sidebar__post-img">
                        <img src={blogTwo} alt="" />
                    </div>
                    <div class="blog-sidebar__post-info">
                        <h4><a href="">The Amazing Hubble</a></h4>
                        <p>January 12, 2019</p>
                    </div>
                </div>
                <div class="blog-sidebar__post-item">
                    <div class="blog-sidebar__post-img">
                        <img src={blogThre} alt="" />
                    </div>
                    <div class="blog-sidebar__post-info">
                        <h4><a href="">From life was you fish...</a></h4>
                        <p>January 12, 2019</p>
                    </div>
                </div>
                <div class="blog-sidebar__post-item">
                    <div class="blog-sidebar__post-img">
                        <img src={blogOne} alt="" />
                    </div>
                    <div class="blog-sidebar__post-info">
                        <h4><a href="">The Amazing Hubble</a></h4>
                        <p>January 12, 2019</p>
                    </div>
                </div>
            </div>
            <div class="blog-sidebar__tags blog-sidebar__back">
                <h4>Теги</h4>
                <ul>
                    <li><a href="">project</a></li>
                    <li><a href="">love</a></li>
                    <li><a href="">technology</a></li>
                    <li><a href="">travel</a></li>
                    <li><a href="">restaurant</a></li>
                    <li><a href="">life style</a></li>
                    <li><a href="">design</a></li>
                    <li><a href="">illustration</a></li>
                </ul>
            </div>
            <div class="blog-sidebar__search blog-sidebar__back">
                <h4>Рассылка</h4>
                <form action="">
                    <input type="text" placeholder="Введите E-mail" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Введите E-mail'" />
                </form>
                <button class="blog-search__button-main">Подписаться</button>
            </div>
        </div>
    )
}

export default AppBlogSidebar;