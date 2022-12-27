<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore";
  import {slide, fade, scale} from 'svelte/transition';
  import {flip} from 'svelte/animate';
</script>

<div class="poll-list">
  {#if $PollStore.length == 0}
    No Polls yet :(
  {:else}
    {#each $PollStore as poll (poll.id)}
      <div in:fade out:scale|local animate:flip={{duration: 500}}><PollDetails {poll}/></div>
    {/each}
  {/if}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
