import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { Layers_control } from "../components/mapas/Layers_control";
import { LocationMarker } from "../components/mapas/LocationMarker";
import { MapDraw } from "../components/mapas/MapDraw";
import { useMaps } from "../context/MapContext";
import "../css/maps.css";

export const Maps = () => {
  const position = [-26.19588, -58.21915];
  const { mapRef } = useMaps();

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      ref={mapRef}
    >
      <LayersControl position='bottomleft'>
          <LayersControl.BaseLayer checked name='Vista urbano'>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='vista satelite'>
            <TileLayer
              url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
              maxZoom={20}
              subdomains={["mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>

        <Marker position={position}>
          <Popup>Direccion actual &#x1F340;</Popup>
        </Marker>
      </LayersControl>
      <Layers_control />
      <LocationMarker />
      <MapDraw />
    </MapContainer>
  );
};
