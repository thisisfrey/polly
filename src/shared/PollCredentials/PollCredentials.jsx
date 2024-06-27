import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { getPollById } from "../../api/actions";

function PollCredentials({ showPoll }) {
  const [pollId, setPollId] = useState("");
  const [password, setPassword] = useState("");
  const [poll, setPoll] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the ID and Password submission logic here
    console.log("Poll ID:", pollId);
    console.log("Password:", password);
    try {
      const response = await getPollById(pollId);
      console.log(response);
      //TODO
      // WA response.payload.data[0]
      setPoll(response.payload.data[0]);
    } catch (error) {
      console.error("Error fetching poll:", error);
      // Handle errors appropriately, e.g., show an error message to the user
    }
  };

  //  TODO
  // WA useEffect to check if passwords match
  useEffect(() => {
    if (password && poll) {
      if (poll.password == password) {
        console.log("Correct Password");
        showPoll(poll);
      } else {
        console.log("Password false!");
      }
    }
  }, [poll]);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Poll ID"
              value={pollId}
              onChange={(e) => setPollId(e.target.value)}
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default PollCredentials;
