import BackToHomeButton from "../../shared/BackToHomeButton/BackToHomeButton";
import ContentBox from "../../shared/ContentBox/ContentBox";
import PollForm from "./PollForm";
import { Box } from "@mui/material";

function CreatePoll() {
  return (
    <>
      <ContentBox>
        <PollForm />
      </ContentBox>
      <BackToHomeButton />
    </>
  );
}

export default CreatePoll;
