<script lang="ts">
  import { shield, dynamic } from "../../store/shield";
  import { getShieldUrl } from "../../utils/SheildGenerator";
  import Icon from "@iconify/svelte";
    import { colorLightness } from "../../utils/ColorLightness";

  function generateMd(alt: string, url: string, to: string) {
    const base = `![${alt}](${url})`;
    if (to) return `[${base}](${to})`;
    return base;
  }

  function generateHtml(alt: string, url: string, to: string) {
    const base = `<img alt="${alt}" src="${url}">`;
    if (to) return `<a href="${to}">\n  ${base}\n</a>`;
    return base;
  }

  let lang = 'md';
  let link = '';
  let useLink = false;
  let copyWait = false;

  let timeout: NodeJS.Timeout;
  function copyGeneratedCode() {
    clearTimeout(timeout);
    copyWait = true;
    timeout = setTimeout(() => {
      copyWait = false;
    }, 3000);
    navigator.clipboard.writeText(generatedCode)
  }

  $: generatedCode = lang === 'md' 
      ? generateMd($shield.message, getShieldUrl($shield, $dynamic), useLink && link) 
      : generateHtml($shield.message, getShieldUrl($shield, $dynamic), useLink && link);
</script>

<div>
  <div class="mx-auto text-white w-fit translate-y-px flex border-t border-r border-dashed border-white">
    <button 
      on:click={() => lang = 'md'} 
      class="bg-gray-800 px-2 py-1 border-l border-r border-dashed border-white text-sm font-bold" 
      class:border-b={lang === 'html'}
    >Markdown</button>
    <button 
      on:click={() => lang = 'html'} 
      class="bg-gray-800 px-2 py-1 border-r border-dashed text-sm font-bold" 
      class:border-b={lang === 'md'}
    >HTML</button>
    <button 
      class="relative bg-gray-800 border-b border-dashed text-xl px-2 hover:bg-gray-700"
      on:click={copyGeneratedCode}
    >
      {#if !copyWait}
        <Icon icon="material-symbols:copy-all-sharp" />
      {:else}
        <Icon icon="material-symbols:check" />
        <span class:!text-white={colorLightness($shield.color) > 0.5} class="text-black absolute top-1/2 -translate-y-1/2 left-full ml-1 text-xs font-bold">Copied!</span>
      {/if}
    </button>
  </div>
  <pre class="px-4 py-2 bg-gray-800 text-white w-fit border border-dashed border-white max-w-[100vw] overflow-x-auto">{
    generatedCode
  }</pre>

  <div class="px-2 mt-2 flex items-center justify-center">
    <button 
      class="{useLink ? 'bg-gray-800' : 'bg-gray-500'} text-white py-1 px-2 text-sm font-bold whitespace-nowrap" 
      on:click={() => useLink = !useLink}
    >
      Use as link
    </button>
    {#if useLink}
      <input 
        class="text-gray-800 outline-none px-1 border border-dashed border-gray-500 flex w-0 max-w-fit flex-grow" 
        type="text" 
        bind:value={link}
        placeholder="https://example.com"
      >
    {/if}
  </div>
</div>