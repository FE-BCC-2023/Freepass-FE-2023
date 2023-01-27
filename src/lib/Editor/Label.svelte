<script lang="ts">
  import { shield } from "../../store/shield";

  let edit = false;
  let iconLink = '';
  let iconValid = false;

  $: {
    iconLink = `https://cdn.simpleicons.org/${$shield.logo}`;
    iconValid = true;
  }
</script>

<div class="wrapper flex items-center bg-gray-800 text-white px-2 outline-1 outline-black" class:outline={edit}>
  {#if iconValid && $shield.logo} 
    <img 
      class="h-4"
      class:mr-1={iconValid}
      alt={$shield.logo} 
      src={iconLink}
      on:error={() => iconValid = false}
    />
  {/if}
  <div 
    contenteditable
    class="outline-none"
    bind:textContent={$shield.label}
    on:focusin={() => edit = true}
    on:focusout={() => edit = false}>
  </div>
</div>