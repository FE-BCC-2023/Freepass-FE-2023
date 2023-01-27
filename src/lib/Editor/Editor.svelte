<script>
  import Color from "./Color.svelte";
  import Label from "./Label.svelte";
  import Icon from "./Icon.svelte";
  import Message from "./Message.svelte";
</script>

<div class="flex flex-grow justify-center items-center px-4">
  <div class="flex flex-col md:flex-row items-center flex-nowrap my-12 p-8 border border-dashed border-gray-400 bg-white">
    <Icon />
    <div class="flex mx-4 my-2">
      <Label />
      <Message />
    </div>
    <Color />
  </div>
</div>