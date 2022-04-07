import './appContact.scss';

const AppContactMap = () => {
    return (
        <div class="contact-map">
            <div id="map"></div> 
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&amp;callback=initMap"></script>
        </div>
    )
} 

export default AppContactMap;