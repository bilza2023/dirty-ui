
<!-- +page.svelte -->
<script>
  import {PivotPlayer} from 'taleem-pivot-player';
  import { deck } from './deck.js';
  
</script>

<PivotPlayer
  {deck}
  soundUrl="/sounds/music.opus"
  background={{
    backgroundColor: "#ffffff",
    backgroundImage: "/pivot/defaultBg.png",
    backgroundImageOpacity: 0.8
  }}
/>

<div class="text-sm">This Page uses the local Pivot Player using "$lib/taleem-pivot-player" and not the published taleem-pivot-player -- This is the dev-project </div>