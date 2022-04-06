import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './mainReview.scss';

import reviewOne from '../../resources/img/main/review-autor/richard-gear.jpg';
import reviewTwo from '../../resources/img/main/review-autor/pavel-durov.jpg';

const MainReview = () => {
    return (
        <div class="container">
            <div class="index-review">
                <h3>Отзывы</h3>
                <h4>Знаменитые люди о вегетарианстве</h4>
                <OwlCarousel className="owl-carousel owl-theme review-carousel"
                    margin={0}
                    items={1}
                    mouseDrag={true} 
                    touchDrag={false}
                    autoplay={true}
                    autoplayTimeout={7000}
                    loop={true}
                    nav={true}
                    dots={false}
                    navText={["<i class=\"icon-angle-left\"></i> ", "<i class=\"icon-angle-right\"></i>"]}
                >
                    <div class="review-carousel-item">
                        <p>«Наша обязанность, как опекунов планеты, относится ко всем созданиям с добротой, любовью и состраданием. То, что животные страдают от жестокости человека — выходит за рамки понимания. Помогите остановить это безумие.»</p>
                        <img src={reviewOne} alt="" />
                        <p class="review-autor">Ричард Гир</p>
                    </div>
                    <div class="review-carousel-item">
                        <p>Спросить, сложно ли придерживаться вегетарианства — это как спросить, сложно ли не есть людей. Не сложно. Сложно — их есть.</p>
                        <img src={reviewTwo} alt="" />
                        <p class="review-autor">Павел Дуров</p>
                    </div>
                </OwlCarousel>
            </div>
        </div> 
    )
}

export default MainReview;