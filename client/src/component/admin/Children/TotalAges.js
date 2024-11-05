import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ButtonMaterial from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import Error from "../../features/Error";
import Loader from "../../features/Loader";
const TotalAges = () => {
  const [json, setJson] = useState("");
  const [file, setFile] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const API_URI = "/api/population/totalAge/export/csv";
  const API_CSV = "http://localhost:5000";
  useEffect(() => {
    const exportCsv = async () => {
      const res = await axios.get(API_URI);
      console.log(res);

      setJson(res?.data?.url);
    };
    exportCsv();
  }, []);
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
      const response = await fetch("/api/population/totalAge", {
        method: "POST",
        body: formData,
      });

      if (response?.status == 201) {
        setLoad(false);
        alert("upload success");
      }
    } catch (error) {
      setLoad(false);

      setErr("Error uploading file");
      console.error("Upload error:", error);
    }
  };

  return (
    <div style={{ padding: "8px", border: "1px solid #807040" }}>
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
            الفئات العمرية
          </Typography>
          <ButtonMaterial
            disabled={!json}
            variant="contained"
            component="label"
            style={{ marginRight: "10px" }}
          >
            <a
              href={`${API_CSV}/population/${json}`}
              download={json}
              target="_self"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              {json ? "Download" : <Loader />}
            </a>
          </ButtonMaterial>
          <ButtonMaterial variant="contained" component="label">
            <UploadFileIcon />
            <input hidden onChange={handleChange2} type="file" />
          </ButtonMaterial>
          <ButtonMaterial
            onClick={handleSubmit}
            variant="outlined"
            disabled={load || file == ""}
            style={{ marginLeft: "10px" }}
          >
            import
          </ButtonMaterial>
        </div>
      )}
    </div>
  );
};

export default TotalAges;
