import AppContactMap from './AppContactMap';
import AppContactForm from './AppContactForm';
import AppContactInfo from './AppContactInfo';

import './appContact.scss';

const AppContact = () => {
    return (
        <div className="container">
            <AppContactMap />
            <div className="contact-block">
                <AppContactForm />
                <AppContactInfo />
            </div>
        </div>
    )
}

export default AppContact;