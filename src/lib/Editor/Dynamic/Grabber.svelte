<script lang="ts">
  import { shield } from "../../../store/shield";
  import Icon from "@iconify/svelte";
  import Entry from "./Entry.svelte";

  type GrabberState = 'success' | 'error' | 'pending' | 'empty';

  let data: object;
  let status: GrabberState = 'empty';
  let statusCode = 200;
  let currentUrl = '';

  function getMessageStatus(_status: GrabberState) {
    switch (_status) {
      case 'empty':
        return 'No data';
      case 'pending':
        return 'Fetching data';
      case 'error':
        return `Something went wrong: ${statusCode}`;
    }
  }

  async function fetchData() {
    if (!currentUrl) {
      status = 'empty';
      return;
    }

    status = 'pending';
    try {
      const res = await fetch(currentUrl);
      if (!res.ok) status = 'error';
      else {
        status = 'success';
        data = await res.json();
      }
      statusCode = res.status;
    } catch {
      status = 'error'
      statusCode = -1
    }
  }

  $: messageStatus = getMessageStatus(status);
  shield.subscribe(() => {
    if (currentUrl === $shield.dynamic.url) return;
    currentUrl = $shield.dynamic.url;
    fetchData();
  });
</script>

<div class="relative z-10 translate-y-px bg-gray-800 text-white font-bold mt-2 w-fit flex items-center border-t border-r border-l border-dashed border-white">
  <button 
    class="text-xl p-1 border-r border-b border-dashed border-white"
    on:click={fetchData}
  >
    <Icon icon="material-symbols:refresh" />
  </button>
  <span class="text-sm py-1 px-2">Path: {$shield.dynamic.query}</span>
</div>
<div class="h-64 md:h-auto relative flex-grow w-full border border-dashed border-white bg-gray-800 overflow-auto">
  {#if status === 'success'}
    <div class="absolute text-white p-1">
      <Entry {data} />
    </div>
  {:else}
    <div class="w-full h-full flex items-center justify-center text-gray-400">{ messageStatus }</div>
  {/if}
</div>