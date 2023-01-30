<script>
  import Color from "./Color.svelte";
  import Label from "./Label.svelte";
  import Icon from "./Icon.svelte";
  import Message from "./Message.svelte";
  import DynamicPane from "./Dynamic/DynamicPane.svelte";
  import { dynamic } from "../../store/shield";
</script>

<div class="flex flex-col md:flex-row flex-grow p-4 gap-4 mb-4 md:mb-0">
  <div class="flex-grow flex flex-col justify-center items-center">
    <div class="flex flex-col md:flex-row items-center flex-nowrap mb-4 p-8 border border-dashed border-gray-400 bg-white">
      <Icon />
      <div class="flex mx-4 my-2">
        <Label />
        <Message />
      </div>
      <Color />
    </div>
    <label class="flex items-center mb-4">
      <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" bind:checked={$dynamic}>
      <span class="ml-2 text-sm font-medium text-gray-800">Dynamic</span>
    </label>
  </div>
  {#if $dynamic}
    <div class="flex flex-grow md:flex-grow-0 flex-shrink-0 border border-dashed border-gray-400 bg-white p-2 max-h-full">
      <DynamicPane />
    </div>
  {/if}
</div>