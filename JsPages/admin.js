import TestFromAdmin from './src/admin/Admin.js'


import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { isDev } from './src/libs/appSetting.js';

import  "./src/css/admin.css";
console.log(isDev);

const zoom=9, center=[-95.805, 29.027];

const map = new Map({
                   basemap: "hybrid"
                    });
const view = new MapView({ container: "adminRoot",map, 
                           zoom,
                           center, });

TestFromAdmin();