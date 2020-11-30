$(document).ready(init);


function init() {
    var mymap = L.map('mapid').setView([25.2048, 55.2708], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 11,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
    
    var marina_mall_marker = L.marker([25.1181, 55.2006]).addTo(mymap);
    marina_mall_marker.bindPopup("<b>Mall of the Emirates</b>.");

    var abu_dhabi_marker = L.marker([25.1988, 55.2796]).addTo(mymap);
    abu_dhabi_marker.bindPopup("<b>Dubai Mall</b>.");
}