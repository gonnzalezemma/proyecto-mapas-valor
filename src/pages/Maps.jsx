import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Layers_control } from "../components/mapas/Layers_control";
import { LocationMarker } from "../components/mapas/LocationMarker";
import { MapDraw } from "../components/mapas/MapDraw";
import { MiniMapControl } from "../components/mapas/MiniMapControl";
import { useMaps } from "../context/MapContext";
import "../css/maps.css";

export const Maps = () => {
  const position = [-26.19588, -58.21915];
  const {mapRef} = useMaps()

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      ref={mapRef}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position}>
        <Popup>Direccion actual &#x1F340;</Popup>
      </Marker>
      <Layers_control />
      <LocationMarker />
      <MiniMapControl position='bottomleft' />
      <MapDraw />
    </MapContainer>
  );
};
