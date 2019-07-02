import { Greeter } from './greeter';
import {OpenMapApi} from './openMapApi';

const g = new Greeter('Juri');
g.greet();

const mapApi = new OpenMapApi();
mapApi.setMapInstance("mapHolder");
