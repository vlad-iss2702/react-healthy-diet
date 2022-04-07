import './appContact.scss';

const AppContactInfo = () => {
    return (
        <div className="contact-block__info">
            <div className="contact-block__info-item">
                <i className="icon-home-outline"></i>
                <section>
                    <p><strong>Buttonwood, California.</strong></p>
                    <p>Rosemead, CA 91770</p>
                </section>
            </div>
            <div className="contact-block__info-item">
                <i className="icon-device-tablet"></i>
                <section>
                    <p><strong>+1 253 565 2365</strong></p>
                    <p>Mon to Fri 9am to 6pm</p>
                </section>
            </div>
            <div className="contact-block__info-item">
                <i className="icon-mail"></i>
                <section>
                    <p><strong>support@colorlib.com</strong></p>
                    <p>Send us your query anytime!</p>
                </section>
            </div>
        </div>
    )
}

export default AppContactInfo;