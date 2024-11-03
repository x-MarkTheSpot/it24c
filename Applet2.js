class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, message) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        marker.bindPopup(message);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

// Correctly set the center to Dahilayan, Bukidnon
const myMap = new LeafletMap('map', [8.3583, 124.8649], 15);

// Optionally add manual markers to check if it's pointing to the correct location
myMap.addMarker(8.3583, 124.8649, 'Dahilayan Adventure Park');
myMap.addMarker(8.3578, 124.8647, 'Dahilayan Forest Park');
myMap.addMarker(8.3585, 124.8653, 'Zipline Launching Area');

// Load markers from the JSON file
myMap.loadMarkersFromJson('applet2.json');