<script lang="ts">
  import Icon from '@iconify/svelte';
  import { shield } from '../../../store/shield';

  let url = $shield.dynamic.url;

  function changeUrl() {
    $shield.dynamic.url = url;
    $shield.dynamic.query = '';
  }
</script>

<span class="block text-sm font-bold mb-1">Endpoint url:</span>
<form on:submit|preventDefault={changeUrl} class="flex items-center bg-gray-800">
  <input
    class="w-full border border-dashed border-black px-1 outline-none"
    type="text"
    placeholder="https://api.example.com"
    bind:value={url}
  />
  <button type="submit" class="bg-gray-800 text-white text-xl px-1">
    <Icon class="mx-auto" icon="material-symbols:arrow-forward" />
  </button>
</form>
