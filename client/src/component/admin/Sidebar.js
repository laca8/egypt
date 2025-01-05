import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../features/Loader";
import Error from "../features/Error";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const SidebarCom = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigator = useNavigate();

  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  const listCategoryReducer = useSelector((state) => state.listCategoryReducer);
  const {
    loading: loadingCat,
    error: errorCat,
    category: dataCat,
    categories,
  } = listCategoryReducer;
  const handlClick = (title) => {
    // navigator(`/admin/sub/${title}`);
    window.location.href = `/admin/sub/${title}`;
  };
  return (
    <div
      style={{
        // border: "1px solid gray",
        backgroundColor: "#807040",
        boxShadow: "1px 0  #333",
        height: "100vh",
        overflowY: "auto",
        color: "#fff",
      }}>
      {loadingCat && <Loader />}
      <div>
        <div
          className="div-sidebar"
          style={{
            display: "flex",
            padding: "10px",
            borderBottom: "1px solid #fff",
            alignItems: "center",
            gap: "10px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => navigator(`/admin/sub/categories`)}>
          <img
            alt=""
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
            }}
            src="https://www.iconarchive.com/download/i99455/webalys/kameleon.pics/Graph-Magnifier.ico"
          />
          <Typography
            className="text-sidebar"
            style={{
              fontWeight: "bold",
            }}>
            Categories
          </Typography>
        </div>

        {categories &&
          categories?.map((x, i) => (
            <div
              className="div-sidebar"
              style={{
                display: "flex",
                padding: "10px",
                borderBottom: "1px solid #fff",
                alignItems: "center",
                gap: "10px",
                color: "#fff",

                cursor: "pointer",
              }}
              onClick={() => handlClick(x?.title)}>
              <img
                alt=""
                src={`${x?.image}`}
                style={{
                  width: "45px",
                  height: "45px",
                  border: "2px solid #807040",
                  borderRadius: "50%",
                }}
              />
              <Typography
                className="text-sidebar"
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                }}>
                {x?.title}
              </Typography>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarCom;
