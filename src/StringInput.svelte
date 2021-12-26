<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  function stringChanged() {
    dispatch('stringChanged', this.value);
  }

  let input: HTMLElement;
  onMount(function() {
    input.focus();
  });
</script>

<input type="text" aria-label="String to convert" spellcheck="false" on:keyup={stringChanged} bind:this={input}>

<style>
    input {
        padding: 0.375rem 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        outline: 0;
        font-size: 1.5em;
        color: inherit;
        background-color: inherit;
    }

    input:hover, input:focus {
        border-color: #1abc9c;
        box-shadow: 0 0 0 0.2rem rgba(26, 188, 156, 0.25);
    }
</style>
