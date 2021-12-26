<script lang="ts">
  import StringInput from './StringInput.svelte';
  import CaseConverter from './CaseConverter.svelte';
  import { onMount } from 'svelte';

  let string = '';

  function handleStringChanged(event: CustomEvent) {
    string = event.detail;
  }

  let theme = 'default';
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
  }

  function toggleDarkMode() {
    if (theme === 'dark') {
      window.document.body.removeAttribute('data-theme');
      theme = 'default';
    } else {
      window.document.body.setAttribute('data-theme', 'dark');
      theme = 'dark';
    }
  }

  function toggleDarkModeKeyUp(event: KeyboardEvent) {
    if (event.code == 'Enter' || event.code == 'NumpadEnter' || event.code == 'Space') {
      toggleDarkMode();
    }
  }

  onMount(function() {
    document.body.style.transition = 'color 300ms, background-color 300ms';
  });
</script>

<nav>
  <svg on:click={toggleDarkMode} on:keyup={toggleDarkModeKeyUp} tabindex="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    {#if theme === 'dark'}
      <path fill="currentColor"
            d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
    {:else}
      <path fill="currentColor" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/>
    {/if}
  </svg>
</nav>

<main>
  <h1>String converter</h1>
  <StringInput on:stringChanged={handleStringChanged}/>
  {#if string.trim()}
    <div class="converted-strings">
      <CaseConverter string="{string}" toCase="camel"/>
      <CaseConverter string="{string}" toCase="pascal"/>
      <CaseConverter string="{string}" toCase="snake"/>
      <CaseConverter string="{string}" toCase="kebab"/>
    </div>
  {/if}
</main>

<style>
    nav {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem;
    }

    nav svg {
        padding: 0.25rem;
        cursor: pointer;
        user-select: none;
    }

    nav svg:focus {
        outline: 0;
        border-radius: 0.25rem;
        box-shadow: 0 0 0 0.2rem rgb(26 188 156 / 35%);
    }

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
