var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_bupi_bbox_limpiacoimbra_1 = new ol.format.GeoJSON();
var features_bupi_bbox_limpiacoimbra_1 = format_bupi_bbox_limpiacoimbra_1.readFeatures(json_bupi_bbox_limpiacoimbra_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bupi_bbox_limpiacoimbra_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bupi_bbox_limpiacoimbra_1.addFeatures(features_bupi_bbox_limpiacoimbra_1);
var lyr_bupi_bbox_limpiacoimbra_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bupi_bbox_limpiacoimbra_1, 
                style: style_bupi_bbox_limpiacoimbra_1,
                popuplayertitle: 'bupi_bbox_limpia coimbra',
                interactive: true,
                title: '<img src="styles/legend/bupi_bbox_limpiacoimbra_1.png" /> bupi_bbox_limpia coimbra'
            });
var format_constru_r_d_2 = new ol.format.GeoJSON();
var features_constru_r_d_2 = format_constru_r_d_2.readFeatures(json_constru_r_d_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_constru_r_d_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_constru_r_d_2.addFeatures(features_constru_r_d_2);
var lyr_constru_r_d_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_constru_r_d_2, 
                style: style_constru_r_d_2,
                popuplayertitle: 'constru_r_d',
                interactive: true,
                title: '<img src="styles/legend/constru_r_d_2.png" /> constru_r_d'
            });
var format_constru_u_d_3 = new ol.format.GeoJSON();
var features_constru_u_d_3 = format_constru_u_d_3.readFeatures(json_constru_u_d_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_constru_u_d_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_constru_u_d_3.addFeatures(features_constru_u_d_3);
var lyr_constru_u_d_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_constru_u_d_3, 
                style: style_constru_u_d_3,
                popuplayertitle: 'constru_u_d',
                interactive: true,
                title: '<img src="styles/legend/constru_u_d_3.png" /> constru_u_d'
            });
var format_parcelas_r_d_4 = new ol.format.GeoJSON();
var features_parcelas_r_d_4 = format_parcelas_r_d_4.readFeatures(json_parcelas_r_d_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_r_d_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_r_d_4.addFeatures(features_parcelas_r_d_4);
var lyr_parcelas_r_d_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_r_d_4, 
                style: style_parcelas_r_d_4,
                popuplayertitle: 'parcelas_r_d',
                interactive: true,
                title: '<img src="styles/legend/parcelas_r_d_4.png" /> parcelas_r_d'
            });
var format_vias_5 = new ol.format.GeoJSON();
var features_vias_5 = format_vias_5.readFeatures(json_vias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_5.addFeatures(features_vias_5);
var lyr_vias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vias_5, 
                style: style_vias_5,
                popuplayertitle: 'vias',
                interactive: true,
                title: '<img src="styles/legend/vias_5.png" /> vias'
            });
var group_CARTOSEC = new ol.layer.Group({
                                layers: [lyr_bupi_bbox_limpiacoimbra_1,lyr_constru_r_d_2,lyr_constru_u_d_3,lyr_parcelas_r_d_4,lyr_vias_5,],
                                fold: 'open',
                                title: 'CARTOSEC'});

lyr_EsriWorldImagery_0.setVisible(true);lyr_bupi_bbox_limpiacoimbra_1.setVisible(true);lyr_constru_r_d_2.setVisible(true);lyr_constru_u_d_3.setVisible(true);lyr_parcelas_r_d_4.setVisible(true);lyr_vias_5.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,group_CARTOSEC];
lyr_bupi_bbox_limpiacoimbra_1.set('fieldAliases', {'fid': 'fid', 'n_rgg': 'n_rgg', });
lyr_constru_r_d_2.set('fieldAliases', {'element': 'element', 'id': 'id', 'USO': 'USO', 'TIPOPOL': 'TIPOPOL', 'PROP': 'PROP', 'CONSTRU': 'CONSTRU', 'REFCAT': 'REFCAT', 'CAPA_ORIGEN': 'CAPA_ORIGEN', 'FID_': 'FID_', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'ID': 'ID', });
lyr_constru_u_d_3.set('fieldAliases', {'element': 'element', 'id': 'id', 'USO': 'USO', 'TIPOPOL': 'TIPOPOL', 'PROP': 'PROP', 'CONSTRU': 'CONSTRU', 'REFCAT': 'REFCAT', 'CAPA_ORIGEN': 'CAPA_ORIGEN', 'FID_': 'FID_', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'COUNTRY': 'COUNTRY', 'CITIES': 'CITIES', 'FUA_OR_CIT': 'FUA_OR_CIT', 'CODE2012': 'CODE2012', 'PROD_DATE': 'PROD_DATE', 'IDENT': 'IDENT', 'AREA_ha': 'AREA_ha', 'Legenda': 'Legenda', 'ID': 'ID', });
lyr_parcelas_r_d_4.set('fieldAliases', {'FID_': 'FID_', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'CAPA_ORIGEN': 'CAPA_ORIGEN', 'COUNTRY': 'COUNTRY', 'CITIES': 'CITIES', 'FUA_OR_CIT': 'FUA_OR_CIT', 'CODE2012': 'CODE2012', 'PROD_DATE': 'PROD_DATE', 'IDENT': 'IDENT', 'AREA_ha': 'AREA_ha', 'Legenda': 'Legenda', 'USO': 'USO', 'TIPOPOL': 'TIPOPOL', 'PROP': 'PROP', 'CONSTRU': 'CONSTRU', 'REFCAT': 'REFCAT', 'ID': 'ID', });
lyr_vias_5.set('fieldAliases', {'u': 'u', 'v': 'v', 'key': 'key', 'osmid': 'osmid', 'highway': 'highway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'name': 'name', 'oneway': 'oneway', 'reversed': 'reversed', 'length': 'length', 'ref': 'ref', 'service': 'service', 'bridge': 'bridge', 'junction': 'junction', 'access': 'access', 'width': 'width', 'tunnel': 'tunnel', 'CAPA_ORIGEN': 'CAPA_ORIGEN', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'layer': 'layer', 'Codigo': 'Codigo', 'Shape_Length': 'Shape_Length', });
lyr_bupi_bbox_limpiacoimbra_1.set('fieldImages', {'fid': 'TextEdit', 'n_rgg': 'Range', });
lyr_constru_r_d_2.set('fieldImages', {'element': '', 'id': '', 'USO': '', 'TIPOPOL': '', 'PROP': '', 'CONSTRU': '', 'REFCAT': '', 'CAPA_ORIGEN': '', 'FID_': '', 'Shape_Length': '', 'Shape_Area': '', 'ID': '', });
lyr_constru_u_d_3.set('fieldImages', {'element': 'TextEdit', 'id': 'TextEdit', 'USO': 'TextEdit', 'TIPOPOL': 'TextEdit', 'PROP': 'TextEdit', 'CONSTRU': 'TextEdit', 'REFCAT': 'TextEdit', 'CAPA_ORIGEN': 'TextEdit', 'FID_': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'COUNTRY': 'TextEdit', 'CITIES': 'TextEdit', 'FUA_OR_CIT': 'TextEdit', 'CODE2012': 'TextEdit', 'PROD_DATE': 'TextEdit', 'IDENT': 'TextEdit', 'AREA_ha': 'TextEdit', 'Legenda': 'TextEdit', 'ID': 'Range', });
lyr_parcelas_r_d_4.set('fieldImages', {'FID_': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'CAPA_ORIGEN': 'TextEdit', 'COUNTRY': 'TextEdit', 'CITIES': 'TextEdit', 'FUA_OR_CIT': 'TextEdit', 'CODE2012': 'TextEdit', 'PROD_DATE': 'TextEdit', 'IDENT': 'TextEdit', 'AREA_ha': 'TextEdit', 'Legenda': 'TextEdit', 'USO': 'TextEdit', 'TIPOPOL': 'TextEdit', 'PROP': 'TextEdit', 'CONSTRU': 'TextEdit', 'REFCAT': 'TextEdit', 'ID': 'Range', });
lyr_vias_5.set('fieldImages', {'u': 'TextEdit', 'v': 'TextEdit', 'key': 'TextEdit', 'osmid': 'List', 'highway': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'reversed': 'TextEdit', 'length': 'TextEdit', 'ref': 'TextEdit', 'service': 'TextEdit', 'bridge': 'TextEdit', 'junction': 'TextEdit', 'access': 'TextEdit', 'width': 'TextEdit', 'tunnel': 'TextEdit', 'CAPA_ORIGEN': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'layer': 'TextEdit', 'Codigo': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_bupi_bbox_limpiacoimbra_1.set('fieldLabels', {'fid': 'no label', 'n_rgg': 'no label', });
lyr_constru_r_d_2.set('fieldLabels', {'element': 'no label', 'id': 'no label', 'USO': 'no label', 'TIPOPOL': 'no label', 'PROP': 'no label', 'CONSTRU': 'no label', 'REFCAT': 'no label', 'CAPA_ORIGEN': 'no label', 'FID_': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'ID': 'no label', });
lyr_constru_u_d_3.set('fieldLabels', {'element': 'no label', 'id': 'no label', 'USO': 'no label', 'TIPOPOL': 'no label', 'PROP': 'no label', 'CONSTRU': 'no label', 'REFCAT': 'no label', 'CAPA_ORIGEN': 'no label', 'FID_': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'COUNTRY': 'no label', 'CITIES': 'no label', 'FUA_OR_CIT': 'no label', 'CODE2012': 'no label', 'PROD_DATE': 'no label', 'IDENT': 'no label', 'AREA_ha': 'no label', 'Legenda': 'no label', 'ID': 'no label', });
lyr_parcelas_r_d_4.set('fieldLabels', {'FID_': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'CAPA_ORIGEN': 'no label', 'COUNTRY': 'no label', 'CITIES': 'no label', 'FUA_OR_CIT': 'no label', 'CODE2012': 'no label', 'PROD_DATE': 'no label', 'IDENT': 'no label', 'AREA_ha': 'no label', 'Legenda': 'no label', 'USO': 'no label', 'TIPOPOL': 'no label', 'PROP': 'no label', 'CONSTRU': 'no label', 'REFCAT': 'no label', 'ID': 'no label', });
lyr_vias_5.set('fieldLabels', {'u': 'no label', 'v': 'no label', 'key': 'no label', 'osmid': 'no label', 'highway': 'no label', 'lanes': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'oneway': 'no label', 'reversed': 'no label', 'length': 'no label', 'ref': 'no label', 'service': 'no label', 'bridge': 'no label', 'junction': 'no label', 'access': 'no label', 'width': 'no label', 'tunnel': 'no label', 'CAPA_ORIGEN': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'layer': 'no label', 'Codigo': 'no label', 'Shape_Length': 'no label', });
lyr_vias_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});