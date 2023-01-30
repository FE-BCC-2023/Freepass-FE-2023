<script>
  import { shield, dynamic } from '../../store/shield';
  import { getShieldUrl } from '../../utils/SheildGenerator';
  import { debounce } from 'lodash';

  let url = '';
  const setUrl = debounce(() => (url = getShieldUrl($shield, $dynamic)), 500);

  shield.subscribe(setUrl);
  dynamic.subscribe(setUrl);
</script>

<div class="w-fit p-2 mx-auto bg-white mb-2 border border-dashed border-black">
  <img src={url} alt="generated shield" />
</div>
