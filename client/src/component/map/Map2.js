import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import states from "./states.js";
import { useSelector } from "react-redux";
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
              {categories
                ?.filter((y) => y.title == "السكان")
                ?.map((y) =>
                  y?.subs
                    ?.filter((z) => z.title == "السكان أول العام")
                    ?.map((z) =>
                      z.results
                        .filter((c) => c["المحافظة"] == x.name)
                        ?.sort((a, b) => b["السنة"] - a["السنة"])
                        .slice(0, 2)
                        ?.map((v) => (
                          <p
                            style={{
                              width: "100%",
                              borderBottom: "1px solid #807040",
                              padding: "2px",
                            }}
                          >
                            <span
                              style={{ marginBottom: "2px", padding: "2px" }}
                            >
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
                                }}
                              >
                                {v["عدد السكان"]}
                              </span>
                            </span>
                          </p>
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
