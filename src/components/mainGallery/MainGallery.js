import './mainGallery.scss';

import mainGalleryOne from '../../resources/img/main/gallery/gallery-1.jpg';
import mainGalleryTwo from '../../resources/img/main/gallery/gallery-2.jpg';
import mainGalleryThre from '../../resources/img/main/gallery/gallery-3.jpg';
import mainGalleryFour from '../../resources/img/main/gallery/gallery-4.jpg';

const MainGallery = () => {
    return (
        <div className="container">
            <div className="index-gallery">
                <div className="index-gallery__item">
                    <img src={mainGalleryOne} alt="" />
                    <div className="index-gallery__overlay"><i className="icon-instagram"></i></div>
                </div>
                <div className="index-gallery__item">
                    <img src={mainGalleryTwo} alt="" />
                    <div className="index-gallery__overlay"><i className="icon-instagram"></i></div>
                </div>
                <div className="index-gallery__item">
                    <img src={mainGalleryThre} alt="" />
                    <div className="index-gallery__overlay"><i className="icon-instagram"></i></div>
                </div>
                <div className="index-gallery__item">
                    <img src={mainGalleryFour} alt="" />
                    <div className="index-gallery__overlay"><i className="icon-instagram"></i></div>
                </div>
            </div>
        </div>
    )
}

export default MainGallery;