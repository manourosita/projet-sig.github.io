var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DENTIFICATION_1 = new ol.format.GeoJSON();
var features_DENTIFICATION_1 = format_DENTIFICATION_1.readFeatures(json_DENTIFICATION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DENTIFICATION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DENTIFICATION_1.addFeatures(features_DENTIFICATION_1);
var lyr_DENTIFICATION_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DENTIFICATION_1, 
                style: style_DENTIFICATION_1,
                interactive: true,
                title: '<img src="styles/legend/DENTIFICATION_1.png" /> DENTIFICATION'
            });
var format_REFERENCE_2 = new ol.format.GeoJSON();
var features_REFERENCE_2 = format_REFERENCE_2.readFeatures(json_REFERENCE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REFERENCE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFERENCE_2.addFeatures(features_REFERENCE_2);
var lyr_REFERENCE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REFERENCE_2, 
                style: style_REFERENCE_2,
                interactive: true,
                title: '<img src="styles/legend/REFERENCE_2.png" /> REFERENCE'
            });
var format_NEWBASE_3 = new ol.format.GeoJSON();
var features_NEWBASE_3 = format_NEWBASE_3.readFeatures(json_NEWBASE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEWBASE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWBASE_3.addFeatures(features_NEWBASE_3);
var lyr_NEWBASE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEWBASE_3, 
                style: style_NEWBASE_3,
                interactive: true,
                title: '<img src="styles/legend/NEWBASE_3.png" /> NEW BASE'
            });
var format_POINTSDEBASES_4 = new ol.format.GeoJSON();
var features_POINTSDEBASES_4 = format_POINTSDEBASES_4.readFeatures(json_POINTSDEBASES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTSDEBASES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTSDEBASES_4.addFeatures(features_POINTSDEBASES_4);
var lyr_POINTSDEBASES_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POINTSDEBASES_4, 
                style: style_POINTSDEBASES_4,
                interactive: true,
                title: '<img src="styles/legend/POINTSDEBASES_4.png" /> POINTS DE BASES'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DENTIFICATION_1.setVisible(true);lyr_REFERENCE_2.setVisible(true);lyr_NEWBASE_3.setVisible(true);lyr_POINTSDEBASES_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DENTIFICATION_1,lyr_REFERENCE_2,lyr_NEWBASE_3,lyr_POINTSDEBASES_4];
lyr_DENTIFICATION_1.set('fieldAliases', {'fid': 'fid', 'ID de point': 'ID de point', 'X': 'X', 'Y': 'Y', 'h': 'h', 'Type point': 'Type point', 'R�seau': 'R�seau', });
lyr_REFERENCE_2.set('fieldAliases', {'fid': 'fid', 'ID de point': 'ID de point', 'X': 'X', 'Y': 'Y', 'h': 'h', 'Type point': 'Type point', 'R�seau': 'R�seau', });
lyr_NEWBASE_3.set('fieldAliases', {'fid': 'fid', 'ID de point': 'ID de point', 'X': 'X', 'Y': 'Y', 'h': 'h', 'Type point': 'Type point', 'R�seau': 'R�seau', });
lyr_POINTSDEBASES_4.set('fieldAliases', {'fid': 'fid', 'ID de point': 'ID de point', 'X': 'X', 'Y': 'Y', 'h': 'h', 'Type point': 'Type point', 'R�seau': 'R�seau', });
lyr_DENTIFICATION_1.set('fieldImages', {'fid': 'TextEdit', 'ID de point': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'h': 'TextEdit', 'Type point': 'TextEdit', 'R�seau': 'TextEdit', });
lyr_REFERENCE_2.set('fieldImages', {'fid': 'TextEdit', 'ID de point': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'h': 'TextEdit', 'Type point': 'TextEdit', 'R�seau': 'TextEdit', });
lyr_NEWBASE_3.set('fieldImages', {'fid': 'TextEdit', 'ID de point': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'h': 'TextEdit', 'Type point': 'TextEdit', 'R�seau': 'TextEdit', });
lyr_POINTSDEBASES_4.set('fieldImages', {'fid': 'TextEdit', 'ID de point': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'h': 'TextEdit', 'Type point': 'TextEdit', 'R�seau': 'TextEdit', });
lyr_DENTIFICATION_1.set('fieldLabels', {'fid': 'inline label', 'ID de point': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'h': 'inline label', 'Type point': 'inline label', 'R�seau': 'inline label', });
lyr_REFERENCE_2.set('fieldLabels', {'fid': 'inline label', 'ID de point': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'h': 'inline label', 'Type point': 'inline label', 'R�seau': 'inline label', });
lyr_NEWBASE_3.set('fieldLabels', {'fid': 'inline label', 'ID de point': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'h': 'inline label', 'Type point': 'inline label', 'R�seau': 'inline label', });
lyr_POINTSDEBASES_4.set('fieldLabels', {'fid': 'inline label', 'ID de point': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'h': 'inline label', 'Type point': 'inline label', 'R�seau': 'header label', });
lyr_POINTSDEBASES_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});