<script lang="ts">
  import { dynamic, shield } from '../../store/shield';
  import { colorLightness } from '../../utils/ColorLightness';
</script>

<div
  class:text-white={colorLightness($shield.color) > 0.5}
  class="flex"
  style="background-color:{$shield.color};"
>
  {#if !$dynamic}
    <div class="editable px-2" contenteditable bind:textContent={$shield.message} />
  {:else}
    <div class="editable pl-2 border-r" contenteditable bind:textContent={$shield.dynamic.prefix} />
    <div class:opacity-70={!$shield.dynamic.query}>
      {$shield.dynamic.query || 'query'}
    </div>
    <div class="editable pr-2 border-l" contenteditable bind:textContent={$shield.dynamic.suffix} />
  {/if}
</div>

<style lang="postcss">
  .editable {
    @apply focus:outline border-dashed border-white;
  }
</style>
