<script lang="ts">
  import { shield } from "../../store/shield";
  import { staticShieldUrl } from "../../utils/SheildGenerator";

  function generateMd(alt: string, url: string, to: string) {
    const base = `![${alt}](${url})`;
    if (to) return `[${base}](${to})`;
    return base;
  }

  function generateHtml(alt: string, url: string, to: string) {
    const base = `<img alt="${alt}" url="${url}">`;
    if (to) return `<a href="${to}">\n\t${base}\n</a>`;
    return base;
  }

  let lang = 'md';
  let link = '';
  let useLink = false;
</script>

<div>
  <div class="mx-auto text-white w-fit translate-y-px flex border-t border-r border-dashed border-white">
    <button 
      on:click={() => lang = 'md'} 
      class="bg-gray-800 px-2 py-1 border-r border-dashed border-white text-sm font-bold" 
      class:border-b={lang === 'html'}
    >Markdown</button>
    <button 
      on:click={() => lang = 'html'} 
      class="bg-gray-800 px-2 py-1 border-dashed text-sm font-bold" 
      class:border-b={lang === 'md'}
    >HTML</button>
  </div>
  <pre class="px-4 py-2 bg-gray-800 text-white w-fit border border-dashed border-white max-w-[100vw] overflow-x-auto">{
    lang === 'md' 
      ? generateMd($shield.message, staticShieldUrl($shield), useLink && link) 
      : generateHtml($shield.message, staticShieldUrl($shield), useLink && link)
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