require([
        "esri/urlUtils", "esri/map", "esri/dijit/Directions", "dojo/parser",
        "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!" ],             function( urlUtils, Map, Directions, parser) {
        parser.parse();
        //all requests to route.arcgis.com will proxy to the proxyUrl defined in this object.
        urlUtils.addProxyRule({  urlPrefix: "traffic.arcgis.com",  proxyUrl: "/sproxy/" });
        var map = new Map("map", {
          basemap: "streets",
          center:[72.3693,23.5880],
          zoom: 8 });  //default will point to ArcGIS world routing service
        var directions = new Directions({
          map: map },"dir");
        directions.startup();  });