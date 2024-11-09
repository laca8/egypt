import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ButtonMaterial from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import Error from "../../features/Error";
import Loader from "../../features/Loader";
import download from "downloadjs";
const Classes = () => {
  const [json, setJson] = useState("");
  const [file, setFile] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const API_URI = "/api/edu/azhar/classes/export/csv";
  const API_CSV = "http://localhost:5000";
  useEffect(() => {
    const exportCsv = async () => {
      const res = await axios.get(API_URI);
      setJson(res?.data?.url);
      console.log(res);
    };

    exportCsv();
  }, []);
  const downloadFile = async () => {
    console.log(json);

    await fetch(json)
      .then((res) => res.blob())
      .then((blob) => download(blob, json, "csv")) // this line automatically starts a download operation
      .catch((err) => console.log(err));

    const options = {
      headers: {
        "Content-Disposition": `attachment; filename=${json}`,
      },
    };
    fetch(json, options)
      .then((res) => {
        const filename = res.headers
          .get("Content-Disposition")
          .split("filename=")[1];
        return { response: res.blob(), filename: filename };
      })
      .then(({ response, filename }) => {
        var file = window.URL.createObjectURL(response);
        window.location.assign(filename);
        console.log(filename);
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
      const response = await fetch("/api/edu/azhar/classes", {
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
            عدد الفصول الازهر
          </Typography>
          <ButtonMaterial
            variant="contained"
            component="label"
            style={{ marginRight: "10px" }}
          >
            <a
              href={`../../../csv/azhar/${json}`}
              download={json}
              target="_self"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              Download
            </a>
          </ButtonMaterial>

          <button
            onClick={() => downloadFile()}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Excel
          </button>

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
export default Classes;
