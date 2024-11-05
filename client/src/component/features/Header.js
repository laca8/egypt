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
                {data &&
                  data?.map((x, i) => (
                    <Dropdown.Item key={i} href={`/${x?.title}`}>
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
                  boxShadow: "4px 4px #807040",
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
