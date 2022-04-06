import ContentMenu from "./contentMenu/ContentMenu";
import ContentPresent from "./contentPresent/ContentPresent";
import ContentAbout from "./contentAbout/ContentAbout";

import indexBack from '../../resources/img/vegan_bg.png';

const MainContent = () => {
    return (
        <div className="index-back" style={{ backgroundImage: `url(${indexBack})` }}>
            <ContentMenu />
            <ContentPresent />
            <ContentAbout />
        </div>
    )
}

export default MainContent;