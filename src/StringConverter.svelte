<script lang="ts">
  import StringInput from './StringInput.svelte';
  import CaseConverter from './CaseConverter.svelte';

  let string = '';

  function handleStringChanged(event: CustomEvent) {
    string = event.detail;
  }
</script>

<main>
  <h1>String converter</h1>
  <StringInput on:stringChanged={handleStringChanged}/>
  {#if string}
    <div class="converted-strings">
      <CaseConverter string="{string}" toCase="camel"/>
      <CaseConverter string="{string}" toCase="pascal"/>
      <CaseConverter string="{string}" toCase="snake"/>
      <CaseConverter string="{string}" toCase="kebab"/>
    </div>
  {/if}
</main>

<style>
    main {
        display: grid;
        grid-gap: 0.5rem;
    }

    h1 {
        text-align: center;
        font-size: 2.5em;
        margin: 0;
    }

    .converted-strings {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-row-gap: 0.5rem;
    }
</style>
