export const isDev=false;

console.warn = (message,more) => { 
    console.log('%c ' + message+"  "+more, 'color: red; font-weight:bold') 
 }
console.warn("The develop mode::", isDev);
//handle the url problem: http://localhost:8000/map/v1/node_modules/@arcgis/core/assets/esri/themes/light/main.css
(async () => {
  if (isDev) {
      await import("../css/mapfromonline.css");
  }
  else 
      await import("../css/mapfromlocal.css");
})();