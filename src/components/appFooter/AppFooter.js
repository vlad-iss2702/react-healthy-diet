import './appFooter.scss';

import footerBack from '../../resources/img/vegan_bg.png';

const AppFooter = () => {
    return (
        <footer style={{ backgroundImage: `url(${footerBack})` }}>
            <div className="container">
                <div className="footer-list">
                    <div className="footer-item">
                        <h3>New York</h3>
                        <p className="footer-item__text">5th flora, 700/D kings road, green lane New York-1782 <a href>info@burger.com</a></p>
                        <p className="footer-item__phone"><a href="tel:+103784836782">+10 378 483 6782</a></p>
                    </div>
                    <div className="footer-item">
                        <h3>California</h3>
                        <p className="footer-item__text">5th flora, 700/D kings road, green lane New York-1782 <a href>info@burger.com</a></p>
                        <p className="footer-item__phone"><a href="tel:+103784836782">+10 378 483 6782</a></p>
                    </div>
                    <div className="footer-item">
                        <h3>Stay Connected</h3>
                        <form action="">
                            <input className="footer-form__input" type="text" placeholder="Enter your mail" />
                            <input className="footer-form__button" type="submit" placeholder="Sign Up" />
                        </form>
                        <p className="footer-item__info">Stay connect with us to get exclusive offer!</p>
                    </div>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a href><i className="icon-instagram"></i></a></li>
                        <li><a href><i className="icon-twitter"></i></a></li>
                        <li><a href><i className="icon-google-plus"></i></a></li>
                        <li><a href><i className="icon-facebook"></i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;