var map = L.map('map', {zoomControl: false}).setView([13.74, 100.50], 6);

var googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    attributions: '&copy; <a href="https://www.google.co.th/maps/">Google</a>'
}).addTo(map);
var googleTerrain = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    attributions: '&copy; <a href="https://www.google.co.th/maps/">Google</a>'
});
var cartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
    contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
});

var th_pote_rice = L.tileLayer.wms("https://ogc.mapedia.co.th/geoserver/food4res/wms?", {
    layers: 'food4res:th_pote_rice',
    format: 'image/png',
    attribution: '&copy; <a href="https://mapedia.co.th/">MAPEDIA</a>',
    transparent: true,
}).addTo(map);

var landuse52 = L.tileLayer.wms("https://ogc.mapedia.co.th/geoserver/food4res/wms?", {
    layers: 'food4res:landuse52',
    format: 'image/png',
    attribution: '&copy; <a href="https://mapedia.co.th/">MAPEDIA</a>',
    transparent: true,
}).addTo(map);

var provinces = L.layerGroup().addTo(map); //สร้างตัวแปลสำหรับเก็บเลเยอร์ จังหวัด
var nsl_layer = L.layerGroup().addTo(map); //สร้างตัวแปลสำหรับเก็บเลเยอร์ การใช้ประโยชน์ที่ดิน
var bokdin_layer = L.layerGroup().addTo(map); //สร้างตัวแปลสำหรับเก็บเลเยอร์ ตำแหน่งบอกดิน

var baseMaps = {
    "CartoDB_DarkMatter": cartoDB_DarkMatter,
    "Google Hybrid": googleHybrid,
    "Google Terrain": googleTerrain
};
var overlayMaps = {
    'th_pote_rice': th_pote_rice,
    'landuse52': landuse52,
    'th_province': provinces,
    'nsl_layer': nsl_layer,
    'bokdin_layer': bokdin_layer,
};
L.control.layers(baseMaps, overlayMaps).addTo(map);

L.control.zoom({
    position: 'topright'
}).addTo(map);
