<script lang="ts">
  import Icon from '@iconify/svelte';
  import { shield } from '../../store/shield';

  let showTooltip = false;
</script>

<div class="relative flex border border-dashed border-black bg-white">
  <button on:click={() => (showTooltip = !showTooltip)}>
    <Icon class="text-2xl text-gray-800" icon="material-symbols:help-center-sharp" />
  </button>
  <input
    class="w-14 mr-3 ml-1 outline-none"
    type="text"
    placeholder="icon"
    bind:value={$shield.logo}
  />
  <div
    class="hidden md:block absolute w-3 h-3 right-0 top-1/2 translate-x-1/2 -translate-y-1/2 
          rotate-45 border-r border-t border-dashed border-black bg-white"
  />
  {#if showTooltip}
    <div
      class="absolute top-full left-0 bg-white border border-dashed border-black translate-y-2 -translate-x-1/2 text-sm p-1 w-32"
    >
      Fill with icon slug (e.g., svelte, vuedotjs). Read <a
        class="top-full left-0 underline decoration-dashed underline-offset-2 decoration-blue-500"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md">this file</a
      > for the list of icons
    </div>
  {/if}
</div>
