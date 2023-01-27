<script>
  import { shield } from "../../store/shield";
  import { colorLightness } from "../../utils/ColorLightness";
  import { staticShieldUrl } from "../../utils/SheildGenerator";
  import { debounce } from "lodash";
  import Shield from "./Shield.svelte";
    import Code from "./Code.svelte";

  let url = ''
  const setUrl = debounce(() => url = staticShieldUrl($shield), 500);

  shield.subscribe(setUrl)
</script>

<h2 class="text-center font-bold mb-1">Result</h2>
<div class="pb-6 lg:pb-12 pt-4" style="background-color:{$shield.color};">
  <div class="container flex flex-col items-center mx-auto">
    <Shield />
    <Code />
  </div>
</div>