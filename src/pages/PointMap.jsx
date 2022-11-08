import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
var addressPoints = [
  [-26.176276380957702, -58.20204529928884],
  [-26.176231401828524, -58.20193074088833],
  [-26.176186422683465, -58.20181976243754],
  [-26.176141443519526, -58.20169088423651],
  [-26.17644023335157, -58.202292315840836],
  [-26.17638561591302, -58.20216343763984],
  [-26.176353487995677, -58.20198444013886],
  [-26.176298870515076, -58.201869881737494],
  [-26.17625067859987, -58.20173742358682],
  [-26.176224976237847, -58.201622865186295],
  [-26.176520553068478, -58.202213556939896],
  [-26.176469148456327, -58.20209183863915],
  [-26.176411318239644, -58.201945060687976],
  [-26.17636633916254, -58.201823342387215],

  [-26.176465935666137, -58.20188778148771],
  [-26.17649806355248, -58.20200591983874],
  [-26.176584808802197, -58.20213479803975],
  [-26.176665128418044, -58.20218849729028],
  [-26.176597659943525, -58.20201665968868],
  [-26.176539829792063, -58.20189136143823],
  [-26.176494850764506, -58.201733843637086],
  [-26.17644023335157, -58.20160496543616],
  [-26.17676472466637, -58.20220281708994],
  [-26.176726171290497, -58.20203813938856],
  [-26.176661915634753, -58.201934320838035],

  [-26.17659123437307, -58.20166940453663],
  [-26.176523765855727, -58.20153694638515],
  [-26.176854682495758, -58.20218849729028],
  [-26.176812916368988, -58.202073938888944],
  [-26.176735809637655, -58.20166052130028],
  [-26.17671010738114, -58.20151016339939],
  [-26.176983193560588, -58.202133074703596],
  [-26.176947853031066, -58.20200061655292],
  [-26.17691893804649, -58.20189679800235],
  [-26.176854682496973, -58.201767919801384],
  [-26.1768289802667, -58.20165694135055],
  [-26.176777575790553, -58.20155312280001],
  [-26.176755086325564, -58.201438564398714],
  [-26.177057087357134, -58.20206863560314],
  [-26.177005682981587, -58.201954077202615],
  [-26.1769703424603, -58.20183951880209],
  [-26.176925363598926, -58.20167842105049],
  [-26.17688681027618, -58.20155312280001],
  [-26.17683540582555, -58.201438564398714],
];
const multiPolygon = [
  [
    [-26.176143991875357, -58.202510798884646],
    [-26.177134528396955, -58.20214288630714],
    [-26.17685818391015, -58.20133507825598],
    [-26.175892767506483, -58.20170299083442],
    [-26.176143991875357, -58.202510798884646],
  ],
];

import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-regular-grid-cluster";
import "leaflet-easybutton";


const purpleOptions = { color: "purple", fillOpacity: 0 };

export function PointMap() {
  //
  const [latitudPunto, setLatitudPunto] = useState("");
  const [longitudPunto, setLongitudPunto] = useState("");
  //
  const [show, setShow] = useState(false);

  const inputLatitud = useRef(null);
  const inputLongitud = useRef(null);
  const inputValor = useRef(null);

  // Map state:
  const [mapInstance, setMapInstance] = useState(null);
  const [marker, setMarker] = useState(null);

  // Map refs:
  const localizationRef = useRef(null);
  const mapRef = useRef(null);
  const tileRef = useRef(null);
  const markerRef = useRef(null);

  const [localization, setLocalization] = useState(null);
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);
  const [value, setValue] = useState(null);
  //const [,]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEnviar = () => {
    setLatitud(inputLatitud.current.value);
    setLongitud(inputLongitud.current.value);
    setValue(inputValor.current.value);
  };

  useEffect(() => {
    if (value && latitud && longitud) {
      handleClick(value, latitud, longitud);
    }
  }, [longitud, latitud, value]);
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
    width: "100%",
    height: "100vh",
  };

  // Options for our map instance:
  const mapParams = {
    center: [-26.176143991875357, -58.202510798884646], 
    zoom: 30,
    zoomControl: false,
    zoomSnap: 0.75,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    closePopupOnClick: false,
    layers: [tileRef.current], 
  };

  // Map creation:
  useEffect(() => {
    mapRef.current = L.map("map", mapParams);
    var myIcon = L.icon({
      iconUrl: '../components/assets/Logo.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: '../components/assets/Logo.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  });
 
    L.polygon(multiPolygon, purpleOptions,{icon: myIcon}).addTo(mapRef.current);

    // Set map instance to state:
    setMapInstance(mapRef.current);
  }, []);

  
  useEffect(() => {
    
    if (!mapInstance) return;
    if (mapInstance) {
    
      var stateChangingButton = L.easyButton({
        states: [
          {
            stateName: "agregar-point", 
            icon: '<ion-icon name="golf-outline"></ion-icon>', // and define its properties
            title: "create click", // like its title
            onClick: function (btn, map) {
              // and its callback
              map.on("click", function (e) {
                const { lat, lng } = e.latlng;
                setLatitudPunto(lat);
                setLongitudPunto(lng);
                handleShow();
              });

              btn.state("eliminar-points"); // change state on click!
            },
          },
          {
            stateName: "eliminar-points",
            icon: '<ion-icon name="arrow-back-circle-outline"></ion-icon>',
            title: "delete",
            onClick: function (btn, map) {
              map.eachLayer(function (layer) {
                if (layer.options.name == "points") {
                  map.removeLayer(layer);
                }
              });

              btn.state("agregar-point");
            },
          },
        ],
      });
      stateChangingButton.addTo(mapInstance);
      var modalButton = L.easyButton({
        states: [
          {
            stateName: "abrir-modal", // name the state
            icon: '<ion-icon name="tv-outline"></ion-icon>', // and define its properties
            title: "modal button", // like its title
            onClick: function (btn, map) {
              // and its callback

              handleShow();

              // change state on click!
            },
          },
        ],
      });
      modalButton.addTo(mapInstance);

      stateChangingButton.addTo(mapInstance);
      var buttonUbication = L.easyButton({
        states: [
          {
            stateName: "habilitar-ubicacion", // name the state
            icon: '<ion-icon name="locate-outline"></ion-icon>', // and define its properties
            title: "ubicacion button", // like its title
            onClick: function (btn, map) {
              // and its callback
              
              var pointPosition, radioPosition;
             
              function onLocationFound(e) {
                // if position defined, then remove the existing position marker and accuracy circle from the map
                if (pointPosition) {
                    map.removeLayer(pointPosition);
                    map.removeLayer(radioPosition);
                }
          
                var radius = e.accuracy / 2;

                pointPosition = L.circle(e.latlng, 3, {
                  name:"point-ubication",
                    weight: 2,
                    color: 'white',
                    fillColor: 'blue',
                    fillOpacity: 1
                }).addTo(map)
          
                radioPosition = L.circle(e.latlng, radius,{
                  name:"radius-ubication",
                  weight: 1,
                  fillColor: '#00aae4',
                  fillOpacity: 0.1
                }).addTo(map);
              }
              function onLocationError(e) {
                console.log(e);
              }

               map.on('locationfound', onLocationFound);
               map.on('locationerror', onLocationError);
                function locate() {
                  map.locate({setView: true,})
                }
      
              locate()

           

   
      btn.state("deshabilitar-ubicacion");
            },

          },{
            stateName: "deshabilitar-ubicacion", // name the state
            icon: '<ion-icon name="arrow-back-circle-outline"></ion-icon>', // and define its properties
            title: "modal button", // like its title
            onClick: function (btn, map) {
              map.eachLayer(function (layer) {
                if (layer.options.name == "point-ubication") {
                  map.removeLayer(layer);
                }
                if (layer.options.name == "radius-ubication") {
                  map.removeLayer(layer);
                }

              });
              map.stopLocate() 
           
           
              btn.state("habilitar-ubicacion");
            }
          }
        ],
      });
      const button= L.easyButton({
        states: [
          {
            stateName: "abrir-modal-position", // name the state
            icon: '<ion-icon name="location-outline"></ion-icon>', // and define its properties
            title: "modal button", // like its title
            onClick: function (btn, map) {
              // and its callback
           
                map.eachLayer(function (layer) {
                  if (layer.options.name == "point-ubication") {
                
                    
                  setLatitudPunto(layer._latlng.lat);
                  setLongitudPunto(layer._latlng.lng);

                  
                   


                  }
                });
              handleShow();

              // change state on click!
            },
          },
        ],
      })
      buttonUbication.addTo(mapInstance);
      button.addTo(mapInstance);
    }
  }, [mapInstance]);

  // Toggle marker on button click:
  const handleClick = (value, latitud, longitud) => {
   
 
 
    const valorOptimo = 100;

    const porcentajeValue = value / valorOptimo;
    const valuation = [latitud, longitud];

    if (porcentajeValue <= 0.25) {
      var label = "Estado Muy grave";
      var color = "#D4000B";
    } else if ((porcentajeValue > 0.25) & (porcentajeValue <= 0.5)) {
      var label = `Estado Grave:  ${porcentajeValue}`;
      var color = "#F06418";
    } else if ((porcentajeValue > 0.5) & (porcentajeValue <= 0.75)) {
      var label = `Estado Moderado:  ${porcentajeValue}`;
      var color = "#D4BE1E";
    } else if ((porcentajeValue > 0.75) & (porcentajeValue <= 0.95)) {
      var label = `Estado Normal: ${porcentajeValue}`;
      var color = "#B6BE1E";
    } else if ((porcentajeValue > 0.95) & (porcentajeValue <= 1)) {
      var label = `Estado Perfecto: ${porcentajeValue}`;
      var color = "#27C200";
    } else if (porcentajeValue > 1) {
      var label = `Estado Exceso: ${porcentajeValue}`;
      var color = "#000000";
    } else {
      console.log("Dato Ingresado Incorrecto");
    }

    markerRef.current = L.circleMarker(valuation, {
      name: "points",
      stroke: true,
      color: color,
      radius: 1,
    }).addTo(mapInstance);
    markerRef.current
      .bindPopup(`<b style="color: ${color}">${label}</b><br>Valor: ${value}`)
      .openPopup();
  
  
    handleClose();
    setLatitudPunto("");
    setLongitudPunto("");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Agregue los datos de su parcela</Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="form cordenada-longitud">
            <Form.Label>Latitud</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Longitud"
              ref={inputLatitud}
              defaultValue={latitudPunto}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form cordenada-latitud">
            <Form.Label>Longitud</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Longitud"
              ref={inputLongitud}
              defaultValue={longitudPunto}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form cordenada-y">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa valor"
              ref={inputValor}
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEnviar()}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <div id="map" style={mapStyles} />
    </>
  );
}
