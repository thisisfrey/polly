import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Typography,
  Tooltip,
  Chip,
  Box,
  Checkbox,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { postNewPoll } from "../../api/actions";

const PollForm = () => {
  
  const generateRandomPollId = () => {
    // Generate a random 9-digit numeric string
    const randomPollId = Math.floor(100000000 + Math.random() * 900000000)
      .toString()
      .substring(0, 9);
    return randomPollId;
  };

  const [pollData, setPollData] = useState({
    question: "",
    options: [], // Options stored as an array of objects { id, value }
    duration: "",
    requirePassword: false,
    password: "",
    pollId: generateRandomPollId(), // 9-digit random pollId
    dateOfCreation: new Date().toISOString(),
    dateOfExpiration: new Date().toISOString(), // TODO
  });

  const [newOption, setNewOption] = useState(""); // State for new option text input

  const handleQuestionChange = (e) => {
    setPollData({ ...pollData, question: e.target.value });
  };

  const handleOptionChange = (e) => {
    setNewOption(e.target.value);
  };

  const handleAddOption = () => {
    if (newOption.trim() === "") return; // Prevent adding empty options

    const newOptions = [
      ...pollData.options,
      { id: Date.now(), value: newOption.trim() },
    ];
    setPollData({ ...pollData, options: newOptions });
    setNewOption(""); // Clear the input field
  };

  const handleDeleteOption = (id) => {
    const updatedOptions = pollData.options.filter(
      (option) => option.id !== id
    );
    setPollData({ ...pollData, options: updatedOptions });
  };

  const handleDurationChange = (e) => {
    setPollData({ ...pollData, duration: e.target.value });
  };

  const handleRequirePasswordChange = (e) => {
    setPollData({ ...pollData, requirePassword: e.target.checked });
  };

  const handlePasswordChange = (e) => {
    setPollData({ ...pollData, password: e.target.value });
  };

  const handleOptionKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter key press
      handleAddOption();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(pollData);
    postNewPoll(pollData);

    // Example: Reset form after submission
    setPollData({
      question: "",
      options: [],
      duration: "",
      requirePassword: false,
      password: "",
      pollId: generateRandomPollId(),
      dateOfCreation: new Date().toISOString(),
      dateOfExpiration: new Date().toISOString(), // TODO
    });
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              <span style={{ display: "flex", alignItems: "center" }}>
                Ask a question
                <Tooltip title="Ask your main question for the poll">
                  <IconButton size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </span>
            </Typography>
            <TextField
              fullWidth
              label="Enter your question"
              name="question"
              value={pollData.question}
              onChange={handleQuestionChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              <span style={{ display: "flex", alignItems: "center" }}>
                Options
                <Tooltip title="Options available for the poll">
                  <IconButton size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </span>
            </Typography>
          </Grid>
          {pollData.options.map((option) => (
            <Grid item key={option.id} xs={12}>
              <Chip
                label={option.value}
                onDelete={() => handleDeleteOption(option.id)}
                color="primary"
                deleteIcon={<ClearIcon />}
                sx={{ fontSize: "1.1rem", p: 0 }} // Increase font size
              />
            </Grid>
          ))}
          <Grid item container xs={12} alignItems="center" spacing={2}>
            <Grid item xs={11}>
              <TextField
                label="Add Option"
                value={newOption}
                onChange={handleOptionChange}
                onKeyDown={handleOptionKeyPress} // Handle Enter key press
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={1} style={{ textAlign: "right" }}>
              <IconButton
                aria-label="add-option"
                onClick={handleAddOption}
                color="primary"
                size="medium"
                style={{ width: "100%" }}
              >
                <AddCircleIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              <span style={{ display: "flex", alignItems: "center" }}>
                Duration
                <Tooltip title="Select the duration for the poll">
                  <IconButton size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </span>
            </Typography>
            <Box display="flex" justifyContent="center">
              <RadioGroup
                aria-label="duration"
                name="duration"
                value={pollData.duration}
                onChange={handleDurationChange}
                row
              >
                <FormControlLabel
                  value="3 days"
                  control={<Radio />}
                  label="3 days"
                />
                <FormControlLabel
                  value="1 week"
                  control={<Radio />}
                  label="1 week"
                />
                <FormControlLabel
                  value="1 month"
                  control={<Radio />}
                  label="1 month"
                />
              </RadioGroup>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              <span style={{ display: "flex", alignItems: "center" }}>
                Password
                <Tooltip title="Require a password for the poll">
                  <IconButton size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </span>
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={pollData.requirePassword}
                  onChange={handleRequirePasswordChange}
                  color="primary"
                />
              }
              label="Require Password"
            />
            {pollData.requirePassword && (
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={pollData.password}
                onChange={handlePasswordChange}
                variant="outlined"
                size="small"
              />
            )}
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              Create Poll
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PollForm;
