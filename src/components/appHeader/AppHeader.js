import './appHeader.scss';

import headerLogo from '../../resources/img/logo-3.png';

const AppHeader = () => {
    return (
        <header>
            <div className="header-main">
                <div className="container flex-standart">
                    <ul className="header-menu">
                        <li><a href>Главная</a></li>
                        <li><a href>Меню</a></li>
                        <li><a href>О нас</a></li>
                        <li><a href>Блог</a></li>
                        <li><a href>Контакты</a></li>
                    </ul>
                    <a className="header-logo" href><img src={headerLogo} alt="" /></a>
                    <ul className="header-social">
                        <li><a href><i className="icon-instagram"></i></a></li>
                        <li><a href><i className="icon-twitter"></i></a></li>
                        <li><a href><i className="icon-google-plus"></i></a></li>
                        <li><a href><i className="icon-facebook"></i></a></li>
                    </ul>
                    <a className="header-subscribe">Связаться с нами</a>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;