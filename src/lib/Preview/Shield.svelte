<script>
  import { shield } from "../../store/shield";
  import { staticShieldUrl } from "../../utils/SheildGenerator";
  import { debounce } from "lodash";

  let url = ''
  const setUrl = debounce(() => url = staticShieldUrl($shield), 500);

  shield.subscribe(setUrl)
</script>

<div class="w-fit p-2 mx-auto bg-white mb-2 border border-dashed border-black">
  <img src={url} alt="generated shield">
</div>