import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@mui/material";
import DefaultIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { useNavigate } from "react-router-dom";

const ClickableTile = ({
  label = "label",
  icon: IconComponent = DefaultIcon,
  linkTo = "",
}) => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <Box
      onClick={() => handleClick(linkTo)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        border: "1px solid lightgray",
        padding: 2,
        margin: 1,
        borderRadius: 1,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
        width: "calc(20% - 2px)", // Adjust width for responsiveness
        minWidth: "200px", // Minimum width to maintain readability
        height: "auto", // Automatically adjust height based on content
        mb: 2, // Margin bottom for spacing
      }}
    >
      <Icon component={IconComponent} sx={{ mr: 0.5 }} />
      <Typography variant="h6">{label}</Typography>
    </Box>
  );
};

export default ClickableTile;
