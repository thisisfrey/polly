import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackToHomeButton = () => {
  return (
    <Box
      sx={{
        my: 3,
        position: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#ffffff" }}
          startIcon={<ArrowBackIcon />}
        >
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default BackToHomeButton;
