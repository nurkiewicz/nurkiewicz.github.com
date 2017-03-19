function initMap() {

	function findPlaces() {
		let locations = document.querySelectorAll('[data-location]');
		let all = {};
		for(var i = 0; i < locations.length; ++i) {
			let latLong = locations[i].getAttribute('data-location').split(',');
			let name = locations[i].getAttribute('data-place');
			all[name] = {lat: parseFloat(latLong[0]), lng: parseFloat(latLong[1])};
		}
		return all
	}

	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 3,
	  center: {lat: 50, lng: -20}
	});
	let places = findPlaces();
	for(place in places) {
		if(places.hasOwnProperty(place)) {
			new google.maps.Marker({
				  position: places[place],
				  map: map,
				  title: place
			});
		}
	}
};