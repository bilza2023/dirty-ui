


<script>
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import 'katex/dist/katex.min.css';
  import '$lib/styles/themes.css';
  import "../app.css";

   const options = {}



</script>

<SvelteToast {options} />
<!-- <slot/> -->

<div class=" min-h-screen h-full">
  <slot></slot>
  </div>