<script>
  import Editor from './lib/Editor/Editor.svelte';
  import Result from './lib/Preview/Result.svelte';
</script>

<div class="bg-gray-100 flex flex-col items-stretch min-h-screen max-h-screen">
  <Editor />
  <Result />
  <div class="bg-gray-800 py-1">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-between text-white/80 text-sm font-bold"
    >
      <span
        >Credit to <a
          rel="noreferrer"
          target="_blank"
          href="https://shields.io"
          class="underline text-white decoration-white">shields.io</a
        ></span
      >
      <span
        >Made with ☕ and ❤ by <a
          rel="noreferrer"
          target="_blank"
          href="https://izzudd.invasikode.com"
          class="underline text-white decoration-white">izzudd</a
        ></span
      >
    </div>
  </div>
</div>
