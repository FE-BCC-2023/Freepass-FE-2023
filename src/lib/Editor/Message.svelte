<script lang="ts">
  import { shield } from "../../store/shield";
  import { colorLightness } from "../../utils/ColorLightness";
</script>

<div 
  contenteditable 
  class:text-white={colorLightness($shield.color) > 0.5} 
  class="px-2 focus:outline" 
  style="background-color:{$shield.color};"
  bind:textContent={$shield.message}>
</div>