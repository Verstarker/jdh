$(function() {
  var locations = $("#locations-dropdown");
  // mapMgr = new MapManager();

  //set up map

  google.maps.event.addDomListener(window, "load", function() {
    //initialise the Map Manager
    init("map-canvas");

    //set up UI
    locations.on("change", function() {
      var config = {
        type: [this.value]
      };
      showLocations(config);
    });
  });
});

$(document).ready(function() {
  $("select").prettyDropdown();
});
