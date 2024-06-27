import axios from "axios";

export const postNewPoll = (newPoll) => {
  return axios.post("http://localhost:3001/polls", newPoll).then((response) => {
    return {
      type: "POST_NEW_POLL",
      payload: response,
    };
  });
};

export const getPollById = (pollId) => {
  return axios
    .get(`http://localhost:3001/polls?pollId=${pollId}`)
    .then((response) => {
      return {
        type: "GET_POLL",
        payload: response,
      };
    });
};
