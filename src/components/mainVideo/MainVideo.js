import './mainVideo.scss';

import videoBack from '../../resources/img/main/video-back.jpg';

const MainVideo = () => {
    return (
        <div class="index-video" style={{ backgroundImage: `url(${videoBack})` }}>
            <div class="container">
                <div class="index-video__info">
                    <h2>Веган или вегетарианец?</h2>
                    <p>Как отказ от животных продуктов<br /> влияет на здоровье полости рта?</p>
                    <a data-modal-video data-video-id="shoVsQhou-8"><i class="icon-play"></i></a>
                </div>                    
            </div>
        </div>
    )
}

export default MainVideo;