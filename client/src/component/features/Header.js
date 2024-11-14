import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Navbar, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/user/userAction";
import popImg from "../../img/population.png";
import azharImg from "../../img/azhar1.jpg";
import childImg from "../../img/child.png";
import cultureImg from "../../img/culture.png";
import eduImg from "../../img/edu.png";
import sportImg from "../../img/sport.jpg";
import intImg from "../../img/inter.jpg";
import healthImg from "../../img/940656.png";
import axios from "axios";
import Loader from "./Loader";
const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { loading, error, userInfo } = userLoginReducer;
  const handleLogout = () => {
    dispatch(logout());
  };
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
      title: "السكان",
      img: popImg,
      url: "population",
    },
    {
      title: "الاطفال",
      img: childImg,
      url: "children",
    },
    {
      title: "التعليم",
      img: eduImg,
      url: "education",
    },
    {
      title: "الازهر",
      img: azharImg,
      url: "azhar",
    },
    {
      title: "الصحة",
      img: healthImg,
      url: "health",
    },
    {
      title: "الرياضة",
      img: sportImg,
      url: "sport",
    },
    {
      title: "الثقافة",
      img: cultureImg,
      url: "culture",
    },
    {
      title: "International",
      img: intImg,
      url: "International",
    },
  ];
  return (
    <Navbar style={{ backgroundColor: "#807040" }}>
      <Container>
        <Navbar.Brand href="/">
          <Typography
            variant="h6"
            component="div"
            style={{ marginRight: "30px", cursor: "pointer" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2257/2257295.png"
              style={{ width: "40px" }}
            />
          </Typography>
        </Navbar.Brand>
        {/* <Navbar.Brand href="/categories">
          <Typography
            variant="p"
            component="div"
            style={{ marginRight: "30px", color: "#fff", cursor: "pointer" }}
          >
            Categories
          </Typography>
        </Navbar.Brand> */}
        <Navbar.Brand>
          <Typography>
            <Dropdown variant="Secondary">
              <Dropdown.Toggle
                id="dropdown-basic"
                variant="Secondary"
                style={{ color: "#fff" }}
              >
                Themes
              </Dropdown.Toggle>

              {load && <Loader />}

              <Dropdown.Menu>
                {arr &&
                  arr?.map((x, i) => (
                    <Dropdown.Item key={i} href={`/${x?.url}`}>
                      {x?.title}
                    </Dropdown.Item>
                  ))}
                {data &&
                  data?.map((x, i) => (
                    <Dropdown.Item key={i} href={`/sub/${x?.title}`}>
                      {x?.title}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </Typography>
        </Navbar.Brand>
        <Navbar.Brand>
          {/* <Dropdown variant="Secondary">
            <Dropdown.Toggle
              id="dropdown-basic"
              variant="Secondary"
              style={{ color: "#fff" }}
            >
              Dashboard
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">Graphs</Dropdown.Item>
              <Dropdown.Item href="/dashboard/tables">Tables</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          {userInfo?.user?.isAdmin ? (
            <div style={{ marginLeft: "20px" }}>
              <Button
                style={{
                  backgroundColor: "#807040",
                  border: "2px solid gray",
                }}
                onClick={() => navigator("/admin/categories")}
              >
                admin
              </Button>
            </div>
          ) : null}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                textAlign: "center",
              }}
            >
              {userInfo?.user?.name ? (
                <Button variant="danger" onClick={handleLogout}>
                  Sign Out
                </Button>
              ) : (
                <Button
                  variant="outline-success"
                  onClick={() => navigator("/login")}
                >
                  Sign In
                </Button>
              )}
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
