<script lang="ts">
  import { toCamelCase, toPascalCase, toSnakeCase, toKebabCase } from './stringFunctions';

  export let string: string;
  export let toCase: string;

  let convertedString: string;
  $: {
    convertedString = convertString(string.trim());
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function convertString(string: string) {
    if (toCase === 'camel') {
      return toCamelCase(string);
    }
    if (toCase === 'pascal') {
      return toPascalCase(string);
    }
    if (toCase === 'snake') {
      return toSnakeCase(string);
    }
    if (toCase === 'kebab') {
      return toKebabCase(string);
    }
  }

  function copyText() {
    const el = document.createElement('textarea');
    el.value = convertedString;
    document.body.appendChild(el);
    el.select();
    // noinspection JSDeprecatedSymbols
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  function copyKeyUp(event: KeyboardEvent){
    if (event.key == 'Enter'){
      copyText();
    }
  }

</script>

<div class="case">{capitalizeFirstLetter(toCase)} case</div>
<div class="converted-string">
  {convertedString}
  <svg on:click={copyText} on:keyup={copyKeyUp} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" tabindex="0">
    <path
      d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"/>
  </svg>
</div>


<style>
    .case, .converted-string {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border: 1px solid #ced4da;
        font-size: 1.2em;
    }

    .case {
        border-right: 0;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        text-align: center;
        user-select: none;
    }

    .converted-string {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        justify-content: space-between;
        grid-gap: 0.5rem;
    }

    .converted-string svg {
        cursor: pointer;
        user-select: none;
    }

    .converted-string svg path {
        fill: #ced4da;
    }

    .converted-string svg:hover path, .converted-string svg:focus path {
        fill: #a8b3bd;
    }

    .converted-string svg:focus {
        outline: 0;
        border-radius: 0.25rem;
        box-shadow: 0 0 0 0.2rem rgb(26 188 156 / 35%);
    }
</style>
