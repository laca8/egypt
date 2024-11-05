import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import { Typography } from "@mui/material";

const ListAge = ({ data1 }) => {
  const arrLast1 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-1"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast2 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-10"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast3 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-20"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast4 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-30"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast5 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-40"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast6 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-50"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast7 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-60"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast8 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-70"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast9 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-80"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arrLast10 = data1
    ?.filter(
      (x) =>
        x?._id?.السنة == Number(Math.max(x?._id.السنة)) && x?._id?.فئات == "-85"
    )
    .reduce((acc, val) => acc + val.العدد, 0);
  const arr = [
    {
      year: "-1",
      total: arrLast1,
    },
    {
      year: "-10",
      total: arrLast2,
    },
    {
      year: "-20",
      total: arrLast3,
    },
    {
      year: "-30",
      total: arrLast4,
    },
    {
      year: "-40",
      total: arrLast5,
    },
    {
      year: "-50",
      total: arrLast6,
    },
    {
      year: "-60",
      total: arrLast7,
    },
    {
      year: "-70",
      total: arrLast8,
    },
    {
      year: "-80",
      total: arrLast9,
    },
    {
      year: "-85",
      total: arrLast10,
    },
  ];

  return (
    <div>
      <ListGroup as="ol" numbered style={{ marginTop: "30px" }}>
        {arr?.map((p, index) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Total Under {p?.year} Year(s)</div>
            </div>
            <Badge bg="primary" pill style={{ padding: "10px" }}>
              {p?.total}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListAge;
