import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import states from "./states.js";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const center = {
  lat: 25.820553,
  lng: 29.802498,

  zoom: 5,
  markers: [],
};
const Map2 = () => {
  const navigator = useNavigate();
  const [desc, setDesc] = useState(null);
  const handleClick = (url) => {
    console.log(url);
    navigator(`/${url}`);
  };
  const handleInfo = (x) => {
    setDesc(x);
  };

  return (
    <div style={{ height: "500px" }}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={center.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; <p>Egypt</p>"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {states.map((x, i) => (
          <Marker
            key={i}
            position={[x.lat, x.lng]}
            // onClick={() => handleClick(x.url)}
          >
            <Popup>
              <h6>{x.name}</h6>
              <p>{x.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map2;
