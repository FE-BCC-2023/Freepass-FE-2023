<script lang="ts">
  import Icon from '@iconify/svelte';
  import { shield } from '../../../store/shield';

  let url = $shield.dynamic.url;

  function changeUrl() {
    $shield.dynamic.url = url;
    $shield.dynamic.query = '';
  }

  let showTooltip = false;
</script>

<span class="block text-sm font-bold mb-1">Endpoint url:</span>
<form on:submit|preventDefault={changeUrl} class="relative flex items-center bg-gray-800">
  <input
    class="w-full border border-dashed border-black px-1 outline-none"
    type="text"
    placeholder="https://api.example.com"
    bind:value={url}
  />
  <button type="submit" class="text-white text-xl px-1">
    <Icon class="mx-auto" icon="material-symbols:arrow-forward" />
  </button>
  <button
    type="button"
    class="text-white text-xl px-1 border-l border-white border-dashed"
    on:click={() => (showTooltip = !showTooltip)}
  >
    <Icon class="text-xl" icon="material-symbols:question-mark" />
  </button>
  {#if showTooltip}
    <div
      class="absolute top-full right-0 z-10 bg-white border border-dashed border-black translate-y-2 text-sm p-1 w-32"
    >
      After fetching given url, you can pick dynamic data by clicking on the yellow text from the
      result below.
    </div>
  {/if}
</form>
