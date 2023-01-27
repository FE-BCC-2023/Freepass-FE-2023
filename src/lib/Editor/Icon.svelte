<script lang="ts">
  import { shield } from "../../store/shield";
</script>

<div 
  class="relative mr-4 border border-dashed border-black bg-white" 
>
  <input 
    class="w-14 mr-3 ml-1 outline-none" 
    type="text"
    placeholder="icon"
    bind:value={$shield.logo}
  >
  <div 
    class="absolute w-3 h-3 right-0 top-1/2 translate-x-1/2 -translate-y-1/2 
          rotate-45 border-r border-t border-dashed border-black bg-white"
  />
</div>
