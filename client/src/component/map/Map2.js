import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import states from "./states.js";

const containerStyle = {
  width: "100%",
  height: "70%",
};

const center = {
  lat: 25.820553,
  lng: 29.802498,
};
const Map2 = () => {
  const navigator = useNavigate();
  const [desc, setDesc] = useState(null);
  const handleClick = (url) => {
    console.log(url);
    //navigator(url)
  };
  const handleInfo = (x) => {
    setDesc(x);
  };
  const API_KEY = "AIzaSyAg1LJW595lOTelTJGwWZMHUunI-RsCdKk";
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        <>
          <Marker position={{ lat: 31, lng: 30 }} />
          {states?.map((x, i) => (
            <Marker
              key={i}
              position={{ lat: x?.lat, lng: x?.lng }}
              onClick={() => handleClick(x.url)}
              onMouseOver={() => handleInfo(x)}
            />
          ))}
        </>
        <>
          {desc && (
            <InfoWindow
              position={{ lat: desc?.lat, lng: desc?.lng }}
              onCloseClick={() => {
                setDesc(null);
              }}
            >
              <div>
                <h6>{desc?.name}</h6>
                <p>{desc?.description}</p>
              </div>
            </InfoWindow>
          )}
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map2;
