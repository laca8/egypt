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
import { listCategory } from "../../redux/actions/category/categoryAction";
import { listCategoryReducer } from "../../redux/reducers/category/categoryReducer";
const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(listCategory());
  }, []);
  const listCategoryReducer = useSelector((state) => state.listCategoryReducer);
  const {
    loading: loadingCat,
    error: errorCat,
    category: dataCat,
    categories,
  } = listCategoryReducer;
  return (
    <Navbar style={{ backgroundColor: "#807040" }} dir="ltr">
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

        <Navbar.Brand>
          <Typography>
            {loadingCat ? (
              <Loader />
            ) : (
              <Dropdown variant="Secondary">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  variant="Secondary"
                  style={{ color: "#fff" }}
                >
                  Themes
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories &&
                    categories?.map((x, i) => (
                      <Dropdown.Item
                        key={i}
                        href={`/sub/${x?.title}`}
                        style={{ color: "#333", textAlign: "right" }}
                      >
                        {x?.title}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
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
                  border: "2px solid #807040",
                }}
                onClick={() => navigator("/admin/sub/categories")}
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
