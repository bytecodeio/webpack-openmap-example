import { Greeter } from './greeter';
import {OpenMapApi} from './openMapApi';

const g = new Greeter('Juri');
g.greet();

const longitude:number = -122.431297;
const latitude:number = 37.773972;
const zoom:number = 10;

const mapApi = new OpenMapApi();
mapApi.setMapInstance("mapHolder", latitude, longitude, zoom);

