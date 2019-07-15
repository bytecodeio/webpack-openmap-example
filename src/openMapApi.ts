
import TileLayer from "ol/layer/tile";
import Map from "ol/map";
import XYZ from "ol/source/xyz";
import View from "ol/view";

//import fromLonLat from 'ol/proj.js';
//import * as ol from 'openlayers';

import * as longFunctions from 'ol/proj';
//import * from 'ol/proj';

const proj = (<any>require('ol/proj'));
//import {fromLonLat} from 'ol/proj';

export class OpenMapApi{
    makeSampleCall():string{ 
        
        // const osmApi = osm();

        return 'OpenMapLibrary.makeSampleCall()...';
    }

    setMapInstance(targetDomElement: string, latitude:number, longitude:number, zoom:number):any{
       
      console.log('proj:');
      console.debug(proj);
      console.log('longFunctions:');
      console.debug(longFunctions);
      console.debug(proj.fromLonLat([longitude, latitude]));
      let center = proj.fromLonLat([longitude, latitude]);
      try{
        //let center = longFunctions.fromLonLat([longitude, latitude]);
        //let center = longFunctions.fromLonLat([1,2]);
      }
      catch(e){

      }

        //console.debug(longFunctions.fromLonLat([longitude, latitude]));
        //console.debug(longFunctions);
        //console.log(fromLonLat([longitude, latitude]));
        console.log('Initializing map in div element \''+ targetDomElement +'\'');

      //-13628989.639200043, 4547544.660038954
      const coords = [latitude, longitude];
      //console.debug(ol.proj.fromLonLat);
      //console.debug(fromLonLat(coords));

      var mapCfg = {
        target: targetDomElement,
        view: new View({
            center: center,
            zoom: zoom,
        }),
        layers: [
          new TileLayer({
              source: new XYZ({
                  url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              }),
          }),
        ],  
      };

        const map = new Map(mapCfg);

        /*
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
        */
    }
}