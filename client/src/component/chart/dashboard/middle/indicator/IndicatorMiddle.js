import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
const Indicator = ({ ind, setInd, city }) => {
  const [arr, setArr] = useState([]);
  let [res, setRes] = useState(
    localStorage.getItem("indicator") ? localStorage.getItem("indicator") : 0
  );
  useEffect(() => {
    if (res) {
      setInd(res);
    } else {
      setInd(ind);
    }
  }, [res]);
  const handleSubmit = () => {
    localStorage.setItem("indicator", ind);
  };
  const handleKey = (e) => {
    e.key == "Enter" && handleSubmit();
  };
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(`/api/total/ages/${city}`);
        console.log(res);
        setArr(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city]);
  const columnsDefs = [
    {
      headerName: "-25",
      field: "-25",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "-20",
      field: "-20",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "-15",
      field: "-15",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "-10",
      field: "-10",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "-5",
      field: "-5",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "-1",
      field: "-1",
      sortable: true,
      filter: true,
    },

    {
      headerName: "النوع",
      field: "النوع",
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="number"
        onKeyDown={handleKey}
        value={ind}
        onChange={(e) => setInd(e.target.value)}
      />
      <div className="ag-theme-alpine" style={{ height: 135 }}>
        <AgGridReact
          rowData={arr}
          columnDefs={columnsDefs}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default Indicator;
