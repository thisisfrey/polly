import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./modules/Home/Home";
import CreatePoll from "./modules/CreatePoll/CreatePoll";
import GiveVote from "./modules/GiveVote/GiveVote";
import PastPolls from "./modules/PastPolls/PastPolls";
import PollResult from "./modules/PollResult/PollResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/vote" element={<GiveVote />} />
        <Route path="/poll-result" element={<PollResult />} />
        <Route path="/past-polls" element={<PastPolls />} />
      </Routes>
    </>
  );
}

export default App;


