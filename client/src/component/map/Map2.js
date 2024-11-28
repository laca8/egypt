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
  const [data, setData] = useState([]);
  const listCategoryReducer = useSelector((state) => state.listCategoryReducer);
  const { loading, error, categories } = listCategoryReducer;
  useEffect(() => {
    setData(
      categories
        ?.filter((z) => z.title == "الفئات العمرية")
        .map((x) =>
          x.subs.map((z) =>
            z.results
              ?.filter((c) => c["القسم أو المركز"] == "قسم التبين")
              ?.reduce((acc, curr) => {
                const value = parseFloat(curr["عدد السكان"]) || 0;
                const existingItem = acc.find(
                  (item) => item["النوع"] === curr["النوع"]
                );

                if (existingItem) {
                  existingItem["عدد السكان"] =
                    parseInt(existingItem["عدد السكان"]) + value;
                } else {
                  acc.push({ ...curr, value: value.toString() });
                }

                return acc;
              }, [])
          )
        )
    );

    console.log(data);
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
            position={[x.lat, x.lng]}
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
              <p
                style={{
                  width: "100%",
                  borderBottom: "1px solid #807040",
                  padding: "2px",
                }}>
                <span style={{ marginBottom: "2px", padding: "2px" }}>
                  محافظة {x["المحافظة"]}, {x["المركز"]}
                </span>
              </p>
              <span
                style={{
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}>
                عدد السكان
              </span>
              {categories
                ?.filter((y) => y.title == "الفئات العمرية")
                ?.map((y) =>
                  y?.subs
                    ?.filter((z) => z.title == "عدد السكان فئات عمرية")
                    ?.map((z) =>
                      z?.results
                        ?.filter((c) => c["القسم أو المركز"] == x["المركز"])

                        ?.reduce((acc, curr) => {
                          const value = parseFloat(curr["عدد السكان"]) || 0;
                          const existingItem = acc.find(
                            (item) => item["النوع"] === curr["النوع"]
                          );

                          if (existingItem) {
                            existingItem["عدد السكان"] =
                              parseInt(existingItem["عدد السكان"]) + value;
                          } else {
                            acc.push({ ...curr, value: value.toString() });
                          }

                          return acc;
                        }, [])

                        ?.map((v) => (
                          <span
                            style={{
                              margin: "2px 2px ",
                              color: "#fff",
                              padding: "5px",
                              backgroundColor: "#807040",
                              textAlign: "right",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                            }}>
                            {v["النوع"]}: {v["عدد السكان"]}
                          </span>
                        ))
                    )
                )}
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
              <p
                style={{
                  width: "100%",
                  borderBottom: "1px solid #807040",
                  padding: "2px",
                }}>
                <span style={{ marginBottom: "2px", padding: "2px" }}>
                  محافظة {x["name"]}
                </span>
              </p>
              <span
                style={{
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}>
                عدد السكان
              </span>
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
                          <span
                            style={{
                              margin: "2px 2px ",
                              color: "#fff",
                              padding: "5px",
                              backgroundColor: "#807040",
                              textAlign: "right",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                            }}>
                            {v["النوع"]}: {v["عدد السكان"]}
                          </span>
                        ))
                    )
                )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map2;
