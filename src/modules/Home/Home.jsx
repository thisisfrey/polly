import "./Home.css";
import { Box } from "@mui/material";
import logo from "../../assets/logo.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PollIcon from "@mui/icons-material/Poll";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ClickableTile from "../../shared/ClickableTile/ClickableTile";

function Home() {
  return (
    <>
      <a href="https://www.devoteam.com/" target="_blank">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          //height: "2 rem",
          //width: "2 rem",
        }}
      >
        <ClickableTile
          label="Start a New Poll"
          icon={AddCircleIcon}
          linkTo="/create-poll"
        />
        <ClickableTile
          label="Share Your Opinion"
          icon={ChatBubbleIcon}
          linkTo="/vote"
        />
        <ClickableTile
          label="View Poll Results"
          icon={PollIcon}
          linkTo="/poll-result"
        />
        {/* <ClickableTile
          label="Browse Past Polls"
          icon={PollIcon}
          linkTo="/past-polls"
        /> */}
      </Box>
      <p className="read-the-docs">Voice today, shape tomorrow.</p>
    </>
  );
}

export default Home;
