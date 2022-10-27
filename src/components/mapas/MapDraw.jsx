import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { useState } from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useMaps } from "../../context/MapContext";

export const MapDraw = () => {
  const { mapLayers, setMapLayers } = useMaps();

  const _onCreate = (e) => {
    console.log(e);

    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [...layers, { id: _leaflet_id }]);
    }
  };

  const _onEdited = (e) => {
    const {
      layers: { _layers },
    } = e;
    // console.log(e);

    Object.values(_layers).map(({ _leaflet_id, editing }) => {
      setMapLayers((layers) => layers.map((l) => l.id === _leaflet_id));
    });
  };

  const _onDeleted = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id }) => {
      setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
    });
  };

  return (
    <FeatureGroup>
      <EditControl
        position='topright'
        onEdited={_onEdited}
        onCreated={_onCreate}
        onDeleted={_onDeleted}
        draw={{
          rectangle: true,
          polyline: true,
          circle: true,
          circlemarker: true,
          marker: true,
        }}
      />
    </FeatureGroup>
  );
};
