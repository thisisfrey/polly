import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import PollCredentials from "../../shared/PollCredentials/PollCredentials";
import BackToHomeButton from "../../shared/BackToHomeButton/BackToHomeButton";

function GiveVote() {
  const [poll, setPoll] = useState({});

  const showPoll = (poll) => {
    console.log("Poll Data", poll);
    setPoll(poll);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        GiveVote
      </Typography>
      <PollCredentials showPoll={showPoll} />
      <BackToHomeButton />
    </Container>
  );
}

export default GiveVote;
