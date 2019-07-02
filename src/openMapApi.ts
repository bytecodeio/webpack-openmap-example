//var osm: any = require('osm');
var ol: any = require('ol');
//import {Map, View} from 'ol';
//import {fromLonLat} from 'ol/proj';
//var MapView: any = require('ol/View');
var TileLayer: any = require('ol/layer/Tile');
//var OSM: any = require('ol/source/OSM');
var coordinateFunctions = require('ol/coordinate');

console.debug( require('ol/source/OSM'));

export class OpenMapApi{
    makeSampleCall():string{ 
        
        // const osmApi = osm();

        return 'OpenMapLibrary.makeSampleCall()...';
    }

    setMapInstance(targetDomElement: string):any{
        
        console.log('Initializing map in div element \''+ targetDomElement +'\'');

        var map = new ol.Map({
            view: new ol.View({
              center: [0, 0],
              zoom: 1
            }),
            layers: [
              new TileLayer({
                source: new ol.source.OSM({})
              })
            ],
            target: targetDomElement
          });

    }
}