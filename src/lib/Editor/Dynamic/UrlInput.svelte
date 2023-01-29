<script lang="ts">
  import { shield } from "../../../store/shield";
</script>

<label>
  <span class="block text-sm font-bold mb-1">Endpoint url:</span>
  <input 
    class="w-full border border-dashed border-black px-1 outline-none" 
    type="text" 
    placeholder="https://api.example.com" 
    bind:value={$shield.dynamic.url}
  >
</label>