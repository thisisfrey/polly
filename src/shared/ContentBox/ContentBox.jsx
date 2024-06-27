import React from "react";
import { Box } from "@mui/material";

const ContentBox = ({ children }) => {
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        padding: 2,
        margin: 1,
        borderRadius: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
