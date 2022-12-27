<script>
  import Footer from "./compontents/Footer.svelte";
  import Header from "./compontents/Header.svelte";
  import PollList from "./compontents/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./compontents/CreatePollForm.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  
  const tabChange = (ev) => {
    activeItem = ev.detail;
  };

  const handleAddPoll = (ev) => {
    activeItem = "Current Polls";
  }
</script>

<Header />

<main />
<Tabs {items} {activeItem} on:tabChange={tabChange} />
{#if activeItem === items[0]}
  <PollList/>
{:else if activeItem === items[1]}
  <CreatePollForm on:addPoll={handleAddPoll}/>
{:else}
  <p>Invalid tab selected :(</p>
{/if}

<Footer />

<style>
  main {
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>
