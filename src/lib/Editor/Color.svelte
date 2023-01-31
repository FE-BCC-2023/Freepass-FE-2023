<script lang="ts">
  import { shield } from '../../store/shield';

  let colorPicker: HTMLInputElement;
</script>

<div
  class="w-fit h-fit relative aspect-square border border-dashed border-black"
  style="background-color:{$shield.color};"
  on:mousedown={() => colorPicker.click()}
>
  <input
    class="w-6 h-6 opacity-0"
    type="color"
    bind:value={$shield.color}
    bind:this={colorPicker}
  />
  <div
    class="hidden md:block absolute w-3 h-3 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 
          rotate-45 border-l border-b border-dashed border-black"
    style="background-color:{$shield.color};"
    on:mousedown={() => colorPicker.click()}
  />
</div>
