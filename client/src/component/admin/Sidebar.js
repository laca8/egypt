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
import eduImg from "../../img/edu.png";
import childImg from "../../img/child.png";
import culImg from "../../img/culture.png";
import envImg from "../../img/env.png";
import azhar from "../../img/azhar1.jpg";
import workImg from "../../img/manpower.png";
import axios from "axios";
import Loader from "../features/Loader";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  return (
    <div style={{ height: "100%", boxShadow: "10px 4px whitesmoke" }}>
      {load && <Loader />}
      <div>
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
          onClick={() => navigator(`/admin/categories`)}
        >
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src="https://www.iconarchive.com/download/i99455/webalys/kameleon.pics/Graph-Magnifier.ico"
          />
          <Typography
            className="text-sidebar"
            style={{
              fontWeight: "bold",
            }}
          >
            All Categories
          </Typography>
        </div>
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
              onClick={() => navigator(`/admin/${x?.title}`)}
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
