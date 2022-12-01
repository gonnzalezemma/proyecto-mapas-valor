import React, { useEffect, useState, useRef } from "react";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import "leaflet-easybutton";
import "leaflet-draw";



export default function CrearParcelaCampo() {
  // Map state:
  const [mapInstance, setMapInstance] = useState(null);
  const [parcela, setParcela] = useState(null);
  // Map refs:
  const mapRef = useRef(null);
  const tileRef = useRef(null);

useEffect(() => {
    console.log("parcela en set")
    console.log(parcela)

},[parcela])

  // Base tile for the map:
  tileRef.current = L.tileLayer(
    `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  const mapStyles = {
    overflow: "hidden",
  border: "none", height:"75vh", width:"100%"
  };

  // Options for our map instance:
  const mapParams = {
    center: [-26.176143991875357, -58.202510798884646],
    zoom: 30,
    zoomControl: true,
    zoomSnap: 0.75,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    closePopupOnClick: false,
    layers: [tileRef.current],
  };

  // Map creation:
  useEffect(() => {
    mapRef.current = L.map("map", mapParams);

    // Set map instance to state:
    setMapInstance(mapRef.current);
  }, []);

  useEffect(() => {
    if (!mapInstance) return;
    if (mapInstance) {
      var editableLayers = new L.FeatureGroup();

      mapInstance.addLayer(editableLayers);

      var options = {
        position: "topright",
        draw: {
          polyline: {
            shapeOptions: {
              color: "#f357a1",
              weight: 10,
            },
          },
          polygon: {
            allowIntersection: false, // Restricts shapes to simple polygons
            drawError: {
              color: "#e1e100", // Color the shape will turn when intersects
              message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
            },
            shapeOptions: {
              color: "#bada55",
            },
          },
          circle: false, // Turns off this drawing tool
          rectangle: {
            shapeOptions: {
              clickable: false,
            },
          },
        },
        edit: {
          featureGroup: editableLayers, //REQUIRED!!
          remove: false,
        },
      };
      var drawControl = new L.Control.Draw(options);
      mapInstance.addControl(drawControl);
    }

    mapInstance.on(L.Draw.Event.CREATED, function (e) {
      var type = e.layerType,
        layer = e.layer;
      if (type === "marker") {
        layer.bindPopup("A popup!");
      }
      editableLayers.addLayer(layer);
      let pupopDiv = document.createElement('div')
     
      let saveBtn = document.createElement('button')

      let br = document.createElement('br')
      let br2 = document.createElement('br')
      
      saveBtn.className='guardar-parcela'
      saveBtn.textContent='Guardar Parcela'
      let H1pupop = document.createElement('p').innerHTML="Guardar Parcela"
   
      
      pupopDiv.append(H1pupop);
      pupopDiv.append(br);
      pupopDiv.append(br2);
      pupopDiv.append(saveBtn);

      saveBtn.onclick= async()=>{
        
          
         

      let arrayData = [];


      const latLongPoly = layer.getLatLngs().map(function(point){
        
        point.map(function(points
         ){
    
            arrayData= [...arrayData, [points.lat, points.lng]]
            
            
                
         })
         return arrayData
      })
      console.log( latLongPoly)  
      setParcela(layer.getLatLngs())      
      }


      layer.bindPopup(pupopDiv).openPopup();
      
      console.log(layer.getLatLngs())
   
    });
  }, [mapInstance]);

  // Toggle marker on button click:
  const handleClick = (value, latitud, longitud) => {};

  return (
    <>
      <div id="map" style={mapStyles} />
    </>
  );
}
