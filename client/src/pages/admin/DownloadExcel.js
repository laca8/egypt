import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { downloadExcel } from "../../redux/actions/category/categoryAction";
import Loader from "../../component/features/Loader";
import axios from "axios";

import * as XLSX from "xlsx";
const DownloadExcel = ({ id, category, title }) => {
  const dispatch = useDispatch();
  const [wait, setWait] = useState(false);

  const downloadExcelReducer = useSelector(
    (state) => state.downloadExcelReducer
  );
  const { loading, error, categories } = downloadExcelReducer;
  const handleFetch = async () => {
    // console.log(category, id);

    // dispatch(downloadExcel(category, id));
    // setTimeout(function () {
    //   setWait(true);
    //   console.log(categories);
    //   const workbook = XLSX.utils.book_new();
    //   // Convert data to worksheet
    //   const worksheet = XLSX.utils.json_to_sheet(categories);
    //   // Add worksheet to workbook
    //   XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    //   // Generate Excel file and trigger download
    //   XLSX.writeFile(workbook, `${title}.xlsx`);
    //   setWait(false);
    // }, 10000);

    try {
      setWait(true);
      const res = await axios.get(
        `/api/category/download/excel/${category}/${id}`
      );
      if (res?.data?.length !== 0) {
        // Create a new workbook
        const workbook = XLSX.utils.book_new();

        // Convert data to worksheet
        const worksheet = XLSX.utils.json_to_sheet(res?.data);

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

        // Generate Excel file and trigger download
        XLSX.writeFile(workbook, `${title}.xlsx`);
        setWait(false);
      } else {
        alert("حدث خطأ حاول مرة أخري");
        setWait(false);
      }
    } catch (err) {
      console.log(err.response);
      setWait(false);
    }
  };

  return (
    <Button
      className="text-black"
      dsiabled={loading | wait}
      style={{ border: "1px solid green" }}
      onClick={handleFetch}>
      {loading ? "wait..." : "Download"}
    </Button>
  );
};

export default DownloadExcel;
