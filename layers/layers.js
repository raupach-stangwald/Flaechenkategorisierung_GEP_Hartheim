var wms_layers = [];


        var lyr_ESRIWorldImageryXYZ_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery XYZ',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BelastungskategoriebRaAFS63_1 = new ol.format.GeoJSON();
var features_BelastungskategoriebRaAFS63_1 = format_BelastungskategoriebRaAFS63_1.readFeatures(json_BelastungskategoriebRaAFS63_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelastungskategoriebRaAFS63_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelastungskategoriebRaAFS63_1.addFeatures(features_BelastungskategoriebRaAFS63_1);
var lyr_BelastungskategoriebRaAFS63_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BelastungskategoriebRaAFS63_1, 
                style: style_BelastungskategoriebRaAFS63_1,
                popuplayertitle: 'Belastungskategorie | bR,a,AFS63',
                interactive: true,
    title: 'Belastungskategorie | bR,a,AFS63<br />\
    <img src="styles/legend/BelastungskategoriebRaAFS63_1_0.png" /> BK I 280 kg/(ha·a)<br />\
    <img src="styles/legend/BelastungskategoriebRaAFS63_1_1.png" /> BK II 530 kg/(ha·a)<br />\
    <img src="styles/legend/BelastungskategoriebRaAFS63_1_2.png" /> BK III 760 kg/(ha·a)<br />' });

lyr_ESRIWorldImageryXYZ_0.setVisible(true);lyr_BelastungskategoriebRaAFS63_1.setVisible(true);
var layersList = [lyr_ESRIWorldImageryXYZ_0,lyr_BelastungskategoriebRaAFS63_1];
lyr_BelastungskategoriebRaAFS63_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'aktualit': 'aktualit', 'gebnutzbez': 'gebnutzbez', 'funktion': 'funktion', 'fktkurz': 'fktkurz', 'name': 'name', 'anzahlgs': 'anzahlgs', 'lagebeztxt': 'lagebeztxt', 'layer': 'layer', 'path': 'path', 'flaeche_m2': 'flaeche_m2', 'afs63_b': 'afs63_b', 'flaeche_ha': 'flaeche_ha', 'Versickerung': 'Versickerung', 'DWA_kat': 'DWA_kat', 'Stoffabtrag_b [kg/a]': 'Stoffabtrag_b [kg/a]', 'nutzart': 'nutzart', 'bez': 'bez', 'flstkennz': 'flstkennz', 'Infos Google Maps': 'Infos Google Maps', 'Straßenname': 'Straßenname', 'DTV KFZ': 'DTV KFZ', });
lyr_BelastungskategoriebRaAFS63_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'aktualit': 'TextEdit', 'gebnutzbez': 'TextEdit', 'funktion': 'TextEdit', 'fktkurz': 'TextEdit', 'name': 'TextEdit', 'anzahlgs': 'Range', 'lagebeztxt': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'flaeche_m2': 'TextEdit', 'afs63_b': 'TextEdit', 'flaeche_ha': 'TextEdit', 'Versickerung': 'TextEdit', 'DWA_kat': 'TextEdit', 'Stoffabtrag_b [kg/a]': 'TextEdit', 'nutzart': 'TextEdit', 'bez': 'TextEdit', 'flstkennz': 'TextEdit', 'Infos Google Maps': 'TextEdit', 'Straßenname': 'TextEdit', 'DTV KFZ': 'TextEdit', });
lyr_BelastungskategoriebRaAFS63_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'oid': 'hidden field', 'aktualit': 'inline label - visible with data', 'gebnutzbez': 'inline label - visible with data', 'funktion': 'inline label - visible with data', 'fktkurz': 'hidden field', 'name': 'inline label - visible with data', 'anzahlgs': 'hidden field', 'lagebeztxt': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', 'flaeche_m2': 'inline label - visible with data', 'afs63_b': 'hidden field', 'flaeche_ha': 'hidden field', 'Versickerung': 'hidden field', 'DWA_kat': 'inline label - always visible', 'Stoffabtrag_b [kg/a]': 'inline label - visible with data', 'nutzart': 'inline label - visible with data', 'bez': 'inline label - visible with data', 'flstkennz': 'hidden field', 'Infos Google Maps': 'inline label - visible with data', 'Straßenname': 'hidden field', 'DTV KFZ': 'inline label - visible with data', });
lyr_BelastungskategoriebRaAFS63_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});