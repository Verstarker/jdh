var map;
var mapCanvas;
var defaultLocation = { lat: -43.511296, lng: 172.595612 };
var config = {
    mapOptions: {
        center: defaultLocation,
        zoom: 12
    },
    geolocation: false,
    placesOptions: {
        radius: 4000,
        detail: {
            containerId: "place-detail",
            imageDimensions: {
                maxWidth: 400,
                maxHeight: 500
            }
        }
    }
};
var currentLocation;
var currentMarkers = [];
var placeDetailContainer;
var placesService;

function init(mapId) {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
}