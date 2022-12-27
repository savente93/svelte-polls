<script>
  import Button from "../shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import PollStore from "../stores/PollStore";
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;
  let reset = false;

  let dispatch = createEventDispatcher();

  const resetForm = () => {
    if (reset) {
      fields = { question: "", answerA: "", answerB: "" };
      valid = false;
      errors = fields = { question: "", answerA: "", answerB: "" };
      reset = false;
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = () => {
    valid = true;

    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question should be at least 5 characters long";
    } else {
      errors.question = "";
    }

    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "First Answer should be not be empty";
    } else {
      errors.answerA = "";
    }

    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "First Answer should be not be empty";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      PollStore.update(currentPolls => {
        return [poll, ...currentPolls]
      })
      dispatch("addPoll");
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll questions:</label>
    <input type="text" id="question" bind:value={fields.question} />
    {#if errors.question !== ""}
      <div class="error">{errors.question}</div>
    {/if}
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    {#if errors.answerA !== ""}
      <div class="error">{errors.answerA}</div>
    {/if}
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    {#if errors.answerB !== ""}
      <div class="error">{errors.answerB}</div>
    {/if}
  </div>
  <Button type="secondry" flat={true}>Add Poll</Button>
  <Button type="secondry" flat={true} inverse={true}>Reset</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
