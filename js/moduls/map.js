function initMap() {
    var unit = {lat: 50.4645645, lng: 30.4634125};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: unit
    });
    var marker = new google.maps.Marker({
        position: unit,
        map: map
    });
}
