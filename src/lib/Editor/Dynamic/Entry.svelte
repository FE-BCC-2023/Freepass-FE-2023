<script lang="ts">
  import { entries, isArray, isObjectLike } from 'lodash';
  import { shield } from '../../../store/shield';

  export let data: object;
  export let base = '$';

  const isDataArray = isArray(data);
  const getPath = (path: string) => (isDataArray ? `${base}[${path}]` : `${base}.${path}`);
</script>

{#each entries(data) as [key, val], idx (getPath(key))}
  {#if isObjectLike(val)}
    <pre>{key}:</pre>
    <div class="ml-[2ch]">
      <svelte:self data={val} base={getPath(key)} />
    </div>
  {:else}
    <pre class="w-fit {$shield.dynamic.query === getPath(key) ? 'border border-white' : ''}"><button
        class="hover:underline decoration-white underline-offset-2
            {$shield.dynamic.query === getPath(key)
          ? 'bg-yellow-300 text-black'
          : 'text-yellow-300'}"
        on:click={() => ($shield.dynamic.query = getPath(key))}>{key}</button
      >: {val}</pre>
  {/if}
{/each}
