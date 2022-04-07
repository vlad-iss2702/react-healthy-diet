import './appContact.scss';


const AppContactForm = () => {
    return (
        <div className="contact-block__form">
            <div className="single-blog__form">
                <div className="contact-title">
                    <p>Get in Touch</p>
                </div>
                <form action="">
                    <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment" style={{ height: `height: 212px` }}></textarea>
                    <input className="blog__form-input-half" type="text" placeholder="Name" />
                    <input className="blog__form-input-half" type="text" placeholder="Email" />
                    <input className="blog__form-input-compl" type="text" placeholder="Website" />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default AppContactForm;