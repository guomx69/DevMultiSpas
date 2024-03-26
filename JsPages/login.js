import TestFromLogin from '/src/Login.js'

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { isDev } from './src/libs/appSetting.js';

import  "./src/css/login.css";
console.log(isDev);


const zoom=10, center=[-95.805, 29.027];

const map = new Map({
                   basemap: "hybrid"
                    });
const view = new MapView({ container: "loginRoot",map, 
                           zoom,
                           center, });
TestFromLogin();