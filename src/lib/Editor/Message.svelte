<script lang="ts">
  import { shield } from "../../store/shield";

  function colorLightness(color: string) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }
</script>

<div 
  contenteditable 
  class:text-white={colorLightness($shield.color) > 0.5} 
  class="px-2 focus:outline" 
  style="background-color:{$shield.color};"
  bind:textContent={$shield.message}>
</div>