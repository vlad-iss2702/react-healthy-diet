import './contentMenu.scss';

import dishesOne from '../../../resources/img/main/dishes-1.jpg';
import dishesTwo from '../../../resources/img/main/dishes-2.jpg';
import dishesThre from '../../../resources/img/main/dishes-3.jpg';
import dishesFour from '../../../resources/img/main/dishes-4.jpg';
import dishesFive from '../../../resources/img/main/dishes-5.jpg';
import dishesSix from '../../../resources/img/main/dishes-6.jpg';
import dishesSeven from '../../../resources/img/main/dishes-7.jpg';
import dishesEight from '../../../resources/img/main/dishes-8.jpg';

const ContentMenu = () => {
    return (
        <div className="container">
            <div className="section-title">
                <span>Веган меню</span>
                <h3>Лучшие веганские блюда</h3>
            </div>
            <div className="index-dishes">
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesOne} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Салат летний</h3>
                        <p>Один из самых популярных салатов с помидорами и огурцами.</p>
                        <span>Количеством витаминов: А, В1, В2, В3, В6, В9, С, Е, Н, PP</span>
                    </div>
                </div>
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesTwo} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Салат из огурцов, капусты</h3>
                        <p>Быстрый, вкусный и самый простой салат из огурцов и капусты.</p>
                        <span>В болгарских перцах находятся уникальные витамины: A, B3, B5, B6, C, E</span>
                    </div>
                </div>
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesThre} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Салат из свеклы и чеснока</h3>
                        <p>Один из самых простых салатов, без применения соусов и пищевых добавок.</p>
                        <span>Содержатся витамины: A, B1, B5, B6, PP, C, E, а также аминокислоты.</span>
                    </div>
                </div>
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesFour} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Греческий салат</h3>
                        <p>Полезный салат, состоящий из огурцов, помидор, болгарского перца</p>
                        <span>Полезные свойства салата в углеводах, белках и клетчатки.</span>
                    </div>
                </div>
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesFive} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Сыроедческие спагетти </h3>
                        <p>Сыроедческие спагетти из кабачка с острым соусом. Блюдо понравится не только сыроедам.</p>
                        <span>Блюдо понравится не только сыроедам. </span>
                    </div>
                </div>
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesSix} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Салат из свежей капусты </h3>
                        <p>Салат из свежей капусты - прекрасный вариант для легкого перекуса или дополнению к основном блюду.</p>
                        <span>Кстати, этот салат - это еще и кладезь полезных веществ </span>
                    </div>
                </div>
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesSeven} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Морковь по-корейски </h3>
                        <p>Морковь, щедро приправленная пряностями, будет отличной закуской на праздничном столе</p>
                        <span>Популярный легкий салат Морковь по-корейски. </span>
                    </div>
                </div>
                <div className="index-dishes__item">
                    <div className="dishes__item-img">
                        <img src={dishesEight} alt="" />
                    </div>
                    <div className="dishes__item-info">
                        <h3>Овощной винегрет </h3>
                        <p>Винегрет — это не только низкокалорийное блюдо. Каждый продукт в его составе приносит определенную пользу организму</p>
                        <span>Свекла насыщает организм микроэлементами, фолиевой кислотой, нормализует работу всех систем и органов. </span>
                    </div>
                </div>
            </div>
            <div className="index-readmore">
                <a href>Смотреть все</a>
            </div>
        </div>
    )
}

export default ContentMenu;