import './contentPresent.scss';

import presentOne from '../../../resources/img/main/present-1.jpg';
import presentTwo from '../../../resources/img/main/present-2.jpg';

const ContentPresent = () => {
    return (
        <div className="index-present">
            <div className="section-title">
                <h3>От фалафеля до эдамаме</h3>
            </div>
            <div className="present-list">
                <div className="present-item">
                    <div className="present-item__img" style={{ backgroundImage: `url(${presentOne})` }}></div>
                    <div className="present-item__info">
                        <h3>Фалафель</h3>
                        <p>В Израиле это блюдо невероятно популярно, его даже сравнивают с американским гамбургером. А вообще оно распространено практически во всех странах Ближнего востока.</p>
                        <a href>Подробнее</a>
                    </div>  
                </div>
                <div className="present-item">
                    <div className="present-item__img" style={{ backgroundImage: `url(${presentTwo})` }}></div>
                    <div className="present-item__info">
                        <h3>Эдамаме</h3>
                        <p>Эдамаме называют несозревшие бобы сои, которые отваривают в подсоленной воде. Иногда с бобами подают соль, но обычно японцы едят их просто так. Эдамаме являются излюбленной закуской в этой стране уже много столетий.</p>
                        <a href>Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPresent;