import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
const Indicator = ({ ind, setInd, city, date, setDate }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        if (city == "Egypt") {
          const res = await axios.get("/api/total/ages");
          console.log(res);
          setArr(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city, date]);

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
        value={ind}
        onChange={(e) => setInd(e.target.value)}
      />
    </div>
  );
};

export default Indicator;
