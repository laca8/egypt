import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import popImg from "../../img/population.png";
import azharImg from "../../img/azhar1.jpg";
import childImg from "../../img/child.png";
import cultureImg from "../../img/culture.png";
import eduImg from "../../img/edu.png";
import sportImg from "../../img/sport.jpg";
import intImg from "../../img/inter.jpg";
import healthImg from "../../img/940656.png";
import axios from "axios";
import Loader from "../features/Loader";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../component/admin/Sidebar";

const SidebarCom = () => {
  const navigator = useNavigate();

  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const res = await axios.get("/api/category");
        console.log(res);

        setData(res?.data);
        setLoad(false);
      } catch (err) {
        setLoad(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const arr = [
    {
      title: "Population",
      img: popImg,
    },
    {
      title: "Children",
      img: childImg,
    },
    {
      title: "Education",
      img: eduImg,
    },
    {
      title: "Azhar",
      img: azharImg,
    },
    {
      title: "Health",
      img: healthImg,
    },
    {
      title: "Sports",
      img: sportImg,
    },
    {
      title: "Culture",
      img: cultureImg,
    },
    {
      title: "International",
      img: intImg,
    },
  ];
  return (
    <div style={{ height: "100%", border: "1px solid gray" }}>
      {load && <Loader />}
      <div>
        <div
          className="div-sidebar"
          style={{
            display: "flex",
            textAlign: "left",
            padding: "10px",

            borderBottom: "1px solid #000",

            alignItems: "center",
            gap: "10px",
            color: "#496580",
            marginLeft: "15px",
            cursor: "pointer",
          }}
          onClick={() => navigator(`/admin/categories`)}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
            src="https://www.iconarchive.com/download/i99455/webalys/kameleon.pics/Graph-Magnifier.ico"
          />
          <Typography
            className="text-sidebar"
            style={{
              fontWeight: "bold",
            }}
          >
            Categories
          </Typography>
        </div>
        {arr &&
          arr?.map((x, i) => (
            <div
              className="div-sidebar"
              style={{
                display: "flex",
                textAlign: "left",
                padding: "10px",
                borderBottom: "1px solid gray",
                alignItems: "center",
                gap: "10px",
                color: "#496580",
                marginLeft: "15px",
                cursor: "pointer",
              }}
              onClick={() => navigator(`/admin/${x?.title}`)}
            >
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={x?.img}
              />
              <Typography
                className="text-sidebar"
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                {x?.title}
              </Typography>
            </div>
          ))}

        {data &&
          data?.map((x, i) => (
            <div
              className="div-sidebar"
              style={{
                display: "flex",
                textAlign: "left",
                padding: "10px",
                borderBottom: "1px solid gray",
                alignItems: "center",
                gap: "10px",
                color: "#496580",
                marginLeft: "15px",
                cursor: "pointer",
              }}
              onClick={() => navigator(`/admin/sub/${x?.title}`)}
            >
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={x?.image}
              />
              <Typography
                className="text-sidebar"
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                {x?.title}
              </Typography>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarCom;
