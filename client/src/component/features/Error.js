import React from "react";
import Alert from "@mui/material/Alert";
const Error = ({ error }) => {
  return (
    <Alert variant="filled" severity="error">
      {error}
    </Alert>
  );
};

export default Error;
