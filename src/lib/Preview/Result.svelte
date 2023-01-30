<script>
  import { shield } from '../../store/shield';
  import { staticShieldUrl } from '../../utils/SheildGenerator';
  import { debounce } from 'lodash';
  import Shield from './Shield.svelte';
  import Code from './Code.svelte';

  let url = '';
  const setUrl = debounce(() => (url = staticShieldUrl($shield)), 500);

  shield.subscribe(setUrl);
</script>

<div class="relative pb-4 lg:pb-12 pt-4" style="background-color:{$shield.color};">
  <h2 class="absolute -top-6 w-full text-center font-bold">Result</h2>
  <div class="container flex flex-col items-center mx-auto">
    <Shield />
    <Code />
  </div>
</div>
