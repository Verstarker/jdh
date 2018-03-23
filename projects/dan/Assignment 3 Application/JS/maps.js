// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// var map,
//   infoWindow,
//   myPlace = { lat: -34.397, lng: 150.644 };
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6
//   });

//   var infoWindow = new google.maps.InfoWindow({ map: map });

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       function(position) {
//         var pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };

//         infoWindow.setPosition(pos);
//         infoWindow.setContent("Location found.");
//         infoWindow.open(map);
//         map.setCenter(pos);
//         var service = new google.maps.places.PlacesService(map);
//         service.nearbySearch(
//           {
//             location: myPlace,
//             radius: 5500,
//             type: ["restaurant"]
//           },
//           callback
//         );
//         function callback(results, status) {
//           if (status === google.maps.places.PlacesServiceStatus.OK) {
//             for (var i = 0; i < results.length; i++) {
//               createMarker(results[i]);
//             }
//           }
//         }

//         function createMarker(place) {
//           var placeLoc = place.geometry.location;
//           var marker = new google.maps.Marker({
//             map: map,
//             position: place.geometry.location
//           });

//           google.maps.event.addListener(marker, "click", function() {
//             infowindow.setContent(place.name);
//             infowindow.open(map, this);
//           });
//         }
//       },
//       function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//       }
//     );
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }

// function MapManager () {
//properties

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

//methods

function init(mapId) {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  currentLocation = config.mapOptions.center;
  mapCanvas = document.querySelector("#" + mapId);
  map = new google.maps.Map(mapCanvas, config.mapOptions);

  if (config.geolocation) {
    doGeolocation();
  }
}

// function calcRoute() {
//   var start = document.getElementById(currentLocation).value;
//   var end = document.getElementById(Marker).value;
//   var request = {
//     origin: start,
//     destination: end,
//     travelMode: 'DRIVING'
//   };
//   directionsService.route(request, function (response, status) {
//     if (status == 'OK') {
//       directionsDisplay.setDirections(response);
//     }
//   });
// }

function showLocations(options) {
  if (currentMarkers.length > 0) {
    clearMarkers();
  }
  placesService = new google.maps.places.PlacesService(map);
  if (!options.type) {
    throw new Error("Options object must include a type property");
  }
  if (!options.location) {
    options.location = currentLocation;
  }
  if (!options.radius) {
    options.radius = config.placesOptions.radius;
  }
  placesService.nearbySearch(options, onGetPlaces);
}

/**
     * Callback for Places service
     */
function onGetPlaces(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;

  //place icon
  var icon = new google.maps.MarkerImage(
    place.icon,
    new google.maps.Size(71, 71),
    new google.maps.Point(0, 0),
    new google.maps.Point(17, 34),
    new google.maps.Size(25, 25)
  );

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    animation: google.maps.Animation.DROP,
    icon: icon
  });

  //click listener for marker
  google.maps.event.addListener(marker, "click", function () {
    if (
      !placeDetailContainer &&
      config.placesOptions &&
      config.placesOptions.detail.containerId
    ) {
      placeDetailContainer = document.querySelector(
        "#" + config.placesOptions.detail.containerId
      );
    }
    if (placeDetailContainer) {
      //this method call takes a custom callback
      getPlaceDetailHTML(place, function (html) {
        if (html) {
          placeDetailContainer.innerHTML = html;
        }
      });
    }
  });

  //add to current markers
  currentMarkers.push(marker);
}

function getPlaceDetailHTML(place, cb) {
  placesService.getDetails(place, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log("place", place);
      var html = `<h2>${place.name}</h2>`;
      if (place.photos && place.photos.length > 0) {
        var photoUrl = place.photos[0].getUrl(
          config.placesOptions.detail.imageDimensions
        );
        html += `<img src="${photoUrl}">`;
      }
      if (place.reviews) {
        html += `<ul>`;
        for (var i = 0; i < place.reviews.length; i++) {
          if (place.reviews[i].text) {
            html += `<li>${place.reviews[i].text}</li>`;
          }
        }
        html += `</ul>`;
      }
      //call custom callback
      cb(html);
    }
    cb(null);
  });
}

function clearMarkers() {
  for (var i = 0; i < currentMarkers.length; i++) {
    var marker = currentMarkers[i];
    marker.setMap(null);
  }
  currentMarkers = [];
}

/* -- */



/* -- */

//geolocation

function doGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      showCurrentLocation,
      showGeolocationError
    );
  } else {
    mapCanvas.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showCurrentLocation(position) {
  currentLocation = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude
  );
  map.setCenter(currentLocation);
  var marker = new google.maps.Marker({
    position: {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    },
    map: map,
    title: "Here I am!"
  });
}

function showGeolocationError() {
  console.log("Geolocation error");
}

//end geolocation
// }
