import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './mainSlider.scss';

import slideOne from '../../resources/img/main/banner1.jpg';
import slideTwo from '../../resources/img/main/banner2.jpg';
import slideThre from '../../resources/img/main/banner3.jpg';
import slideFour from '../../resources/img/main/banner4.jpg';
import slideFive from '../../resources/img/main/banner5.jpeg';
import yellowBack from '../../resources/img/yellow-back.png';

const MainSlider = () => {
    return (
        <div className="main-back">
            <OwlCarousel className="owl-carousel owl-theme main-carousel"
                margin={0}
                items={1}
                mouseDrag={true} 
                touchDrag={false}
                autoplay={true}
                animateOut={'fadeOut'}
                autoplayTimeout={7000}
                loop={true}
                nav={true}
                dots={false}
                navText={["<i class=\"icon-angle-left\"></i> ", "<i class=\"icon-angle-right\"></i>"]}
                >
                <div className="main-carousel-item" style={{ backgroundImage: `url(${slideOne})` }}>
                    <div className="container">
                        <div className="main-carousel-info">
                            <div className="carousel-info__text" style={{ backgroundImage: `url(${yellowBack})` }}>
                                <span>Овощи</span>
                            </div>
                            <h3>Незаменимая польза овощей</h3>
                            <h4>Овощи</h4>
                        </div>
                    </div>
                </div>
                <div className="main-carousel-item" style={{ backgroundImage: `url(${slideTwo})` }}>
                <div className="container">
                    <div className="main-carousel-info">
                        <div className="carousel-info__text" style={{ backgroundImage: `url(${yellowBack})` }}>
                            <span>Фрукты</span>
                        </div>
                        <h3>Какие фрукты полезнее?</h3>
                        <h4>Фрукты</h4>
                    </div>
                </div>
                </div>
                <div className="main-carousel-item" style={{ backgroundImage: `url(${slideThre})` }}>
                    <div className="container">
                        <div className="main-carousel-info">
                            <div className="carousel-info__text" style={{ backgroundImage: `url(${yellowBack})` }}>
                                <span>Сыроедение</span>
                            </div>
                            <h3>Лучшее лекарство</h3>
                            <h4>Сыроедение</h4>
                        </div>
                    </div>
                </div>
                <div className="main-carousel-item" style={{ backgroundImage: `url(${slideFour})` }}>
                    <div className="container">
                        <div className="main-carousel-info">
                            <div className="carousel-info__text" style={{ backgroundImage: `url(${yellowBack})` }}>
                                <span>Витамины</span>
                            </div>
                            <h3>Больше всего витаминов</h3>
                            <h4>Витамины</h4>
                        </div>
                    </div>
                </div>
                <div className="main-carousel-item" style={{ backgroundImage: `url(${slideFive})` }}>
                    <div className="container">
                        <div className="main-carousel-info">
                            <div className="carousel-info__text" style={{ backgroundImage: `url(${yellowBack})` }}>
                                <span>Здоровье</span>
                            </div>
                            <h3>Главный ресурс</h3>
                            <h4>Здоровье</h4>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default MainSlider;