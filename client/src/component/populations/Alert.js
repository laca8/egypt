import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%", marginBottom: "15px" }}>
      <Collapse in={open}>
        <Alert
          variant="filled"
          style={{ backgroundColor: "gray" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          These data in this section are part of the 'Population estimates for
          Egypt: from 1996 to 2022', Population estimates are produced using a
          variety of data sources and statistical models, including some
          statistical disclosure control methods, and small estimates should not
          be taken to refer to particular individuals. The estimated resident
          population of an area includes all those people who usually live
          there, regardless of nationality.
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </Box>
  );
}
