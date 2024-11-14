import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ButtonMaterial from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import Error from "../../../features/Error";
import Loader from "../../../features/Loader";
const PrimaryClass = () => {
  const [json, setJson] = useState("");
  const [file, setFile] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const API_URI = "/api/edu/primary/class/export/csv";
  const API_CSV = "http://localhost:5000";
  const handleChange2 = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setErr("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setLoad(true);
    try {
      const response = await fetch("/api/edu/primary/class", {
        method: "POST",
        body: formData,
      });
      console.log(response);

      if (response?.status == 200 || response?.statusText == "OK") {
        setLoad(false);
        alert("upload success");
      }
    } catch (error) {
      setLoad(false);

      setErr("Error uploading file");
      console.error("Upload error:", error);
    }
  };
  const handleExport = async () => {
    try {
      setLoad(true);
      setErr("");

      const response = await fetch(API_URI);

      if (!response.ok) {
        throw new Error("Export failed");
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "عدد_الفصول.csv";

      // Trigger download
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      setErr("Failed to export data. Please try again.");
      console.error("Export error:", err);
    } finally {
      setLoad(false);
    }
  };
  return (
    <div style={{ padding: "8px", border: "1px solid gray" }}>
      {load ? (
        <Loader />
      ) : err ? (
        <Error error={err} />
      ) : (
        <div
          style={{
            marginBottom: "10px",
            padding: "8px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              padding: "3px",
              backgroundColor: "#807040",
              color: "#fff",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          >
            عدد الفصول المرحلة الابتدائية
          </Typography>
          <ButtonMaterial
            variant="contained"
            component="label"
            style={{ marginRight: "10px", backgroundColor: "#407080" }}
            onClick={handleExport}
          >
            {load ? "Exporting..." : "Export to CSV"}
          </ButtonMaterial>
          <ButtonMaterial
            variant="contained"
            component="label"
            style={{ backgroundColor: "#708040" }}
          >
            <UploadFileIcon />
            <input hidden onChange={handleChange2} type="file" />
          </ButtonMaterial>
          <ButtonMaterial
            onClick={handleSubmit}
            variant="outlined"
            disabled={load || file == ""}
            style={{ marginLeft: "10px" }}
          >
            save
          </ButtonMaterial>
        </div>
      )}
    </div>
  );
};
export default PrimaryClass;
