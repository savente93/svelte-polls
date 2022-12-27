import { writable } from "svelte/store";

const PollStore = writable([{
    question: "Python or SAS?",
    answerA: "Python!",
    answerB: "Wrong answer!",
    votesA: 0,
    votesB: 0,
    id: 1
  }]);

  export default PollStore;