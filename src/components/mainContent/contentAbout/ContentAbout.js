import './contentAbout.scss';

import imgAbout from '../../../resources/img/main/index-about-1.png';

const ContentAbout = () => {
    return (
        <div className="container">
            <div className="index-about">
                <div className="index-about__banner">
                    <img className="index-about__banner-one" src={imgAbout} alt="" />
                </div>
                <div className="index-about__info">
                    <h3>Немного о питании</h3>
                    <h4>ПОЛЕЗНО ЛИ ВЕГЕТАРИАНСТВО?</h4>
                    <p>На сегодня растительная пища признается не только полноценным питанием, но и способом профилактики и уменьшения риска появления многих болезней. Исследования показывают, что вегетарианцы имеют более низкие риски возникновения сердечно-сосудистых заболеваний, избыточного веса и ожирения, некоторых видов рака.</p>
                    <p>Чтобы быть полезной, растительная диета должна быть продуманной. Ведь она не означает простой отказ от мяса и продуктов животного происхождения. Только здоровый растительный рацион (овощи, фрукты, семена), а также полноценная замена животного белка растительным (бобовые, соевые продукты, орехи) способствуют уменьшению риска появления многих заболеваний. Если же вы не употребляете мяса и компенсируете это малопитательной едой, ожидать какие-то полезные эффекты для здоровья тщетно.</p>
                    <p>Если хотите начать такую диету – подходите к этому разумно. Постепенно убирайте мясо или другие продукты животного происхождения из своего рациона. К тому же стоит заранее понять, каким образом вы будете планировать свой обновленный рацион, чтобы получать достаточно питательных веществ.</p>
                </div>
            </div>
        </div>
    )
}

export default ContentAbout;