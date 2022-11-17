/* import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Layers_control } from "../components/mapas/Layers_control";
import { LocationMarker } from "../components/mapas/LocationMarker";
import { MapDraw } from "../components/mapas/MapDraw";
import { MiniMapControl } from "../components/mapas/MiniMapControl";
import { useMaps } from "../context/MapContext"; */

const addressPoints = [];

/* import "../css/maps.css";
import "leaflet.heat"; */
import React, { useEffect, useState, useRef} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import "leaflet-easybutton"
const multiPolygon = [
  [
    [-26.176143991875357, -58.202510798884646],
    [-26.177134528396955, -58.20214288630714],
    [-26.17685818391015, -58.20133507825598],
    [-26.175892767506483, -58.20170299083442],
    [-26.176143991875357, -58.202510798884646],
  ],
];

const purpleOptions = { color: "purple" };

export function HeatMap() {
  

  const  mapContainerRef = useRef(null)
  const  layer = useRef(null)



  

var arrayData=[];

const handleRemove=(map)=>{
  

}
  const handleData=(lat, lng)=>{


   const valuation = [lat, lng, "50"];

    arrayData = [...arrayData, valuation];

    const puntosMapa = arrayData
    ? arrayData.map((p) => {
        return [p[0], p[1]];
      })
    : [];

var definirPuntosMapa= L.heatLayer(puntosMapa, {
  name:"heat",
  maxZoom: 10, 
    max:0.5,
    radius: 25,
    blur: 35,
    gradient: {
      0.2: "red",
      1: "blue",
      0.65: "orange",
    },
  });
  L.layerGroup([definirPuntosMapa])
console.log(L.layerGroup([definirPuntosMapa]))

 return definirPuntosMapa




    }
  
  useEffect(() => {

    const container =L.DomUtil.get(mapContainerRef.current); if(container != null){ container._leaflet_id = null; };


   if(container){ var map = L.map("map").setView([-26.181248, -58.208816], 12);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var no = L.tileLayer.wms("http://localhost:9091/geoserver/proyecto-mapas-valor/wms", {
      layers: "proyecto-mapas-valor:polygon_tables",//nombre de la capa (ver get capabilities)
      format: 'image/jpeg',
      transparent: true,
      version: '1.1.0',//wms version (ver get capabilities)
      attribution: "GeoDatas-Instituto politecnico Formosa",
      opacity: 1
   })
   map.addLayer(no);










   
    var stateChangingButton = L.easyButton({
      states:  [{
            stateName: 'zoom-to-forest',        // name the state
            icon:      'fa-tree',               // and define its properties
            title:     'create',      // like its title
            onClick: function(btn, map) {       // and its callback
              map.on("click", function (e) {
                const { lat, lng } = e.latlng;
              
               
                handleData(lat, lng).addTo(map)
          
              });

                btn.state('zoom-to-school');    // change state on click!
            }
        }, {
            stateName: 'zoom-to-school',
            icon:      'fa-university',
            title:     'delete',
           
            onClick: function(btn, map) {
          /*     */
          //L.layerGroup.removeLayer()
         // L.layerGroup(/* definirPuntosMapa */).removeLayer
           //     handleRemove(map)
           /* L.remove(); */
           map.eachLayer(function (layer) {


            if(layer.options.name=="heat"){
              map.removeLayer(layer)
            }
          }
            )
         
           btn.state('zoom-to-forest');
            
              }
    }]
  });
   
  stateChangingButton.addTo( map );
    
 




    L.polygon(multiPolygon, purpleOptions).addTo(map);}
  },[]);

  return(
  <> 

  <div id="map" style={{ height: "100vh" }}ref={mapContainerRef}>

  </div>
  
  
  </>
  )
}
