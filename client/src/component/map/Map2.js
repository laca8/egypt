import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import states from "./states.js";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Button } from "@mui/material";
import places from "./places.js";
import { MapPin } from "lucide-react";

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
  const listCategoryReducer = useSelector((state) => state.listCategoryReducer);
  const { loading, error, categories } = listCategoryReducer;
  useEffect(() => {
    // if (categories) {
    //   console.log(
    //     categories
    //       ?.filter((y) => y.title == "السكان")
    //       ?.map((y) =>
    //         y?.subs
    //           ?.filter((z) => z.title == "السكان أول العام")
    //           ?.map((z) =>
    //             z.results
    //               ?.filter((c) => c["المحافظة"] == "القاهرة")
    //               ?.sort((a, b) => b["السنة"] - a["السنة"])
    //               .slice(0, 2)
    //               ?.map((v) => v)
    //           )
    //       )
    //   );
    // }
  }, []);
  return (
    <div style={{ height: "500px" }}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={center.zoom}
        scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; <p>Egypt</p>"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map((x, i) => (
          <Marker
            key={i}
            position={[x.latitude, x.longitude]}
            icon={
              new L.Icon({
                iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png`,
                shadowUrl:
                  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                iconSize: [10, 25],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })
            }>
            <Popup>
              <p>{x.name}</p>
            </Popup>
          </Marker>
        ))}
        {states.map((x, i) => (
          <Marker
            key={i}
            position={[x.lat, x.lng]}
            // onClick={() => handleClick(x.url)}
          >
            <Popup>
              {categories
                ?.filter((y) => y.title == "السكان")
                ?.map((y) =>
                  y?.subs
                    ?.filter((z) => z.title == "عدد السكان أول العام")
                    ?.map((z) =>
                      z.results
                        .filter((c) => c["المحافظة"] == x.name)
                        ?.sort((a, b) => b["السنة"] - a["السنة"])
                        .slice(0, 2)
                        ?.map((v) => (
                          <div>
                            <p
                              style={{
                                width: "100%",
                                borderBottom: "1px solid #807040",
                                padding: "2px",
                              }}>
                              <span
                                style={{ marginBottom: "2px", padding: "2px" }}>
                                {v["المحافظة"]}, {v["السنة"]}, {v["النوع"]}
                              </span>
                              <br />
                              <span style={{ padding: "2px" }}>
                                عدد السكان:{" "}
                                <span
                                  style={{
                                    padding: "2px",
                                    backgroundColor: "#807040",
                                    color: "#fff",
                                  }}>
                                  {v["عدد السكان"]}
                                </span>
                              </span>
                            </p>
                          </div>
                        ))
                    )
                )}
              {/* <Button
                style={{
                  backgroundColor: "#708040",
                }}>
                <a
                  href={`${x.url}`}
                  style={{
                    color: "#fff",
                  }}>
                  المراكز
                </a>
              </Button> */}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map2;
