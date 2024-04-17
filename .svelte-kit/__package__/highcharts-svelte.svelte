<script>import * as Highcharts from "highcharts";
import { onMount, onDestroy } from "svelte";
export let constr = "chart";
export let options;
export let updateArgs = true;
export let highcharts = Highcharts;
export let callback = () => {
};
export let chart = null;
let chartContainer;
onMount(() => {
  if (!chartContainer) {
    console.error("[highcharts-svelte] Could not find the chart's container.");
    return;
  }
  if (!options) {
    console.error(
      "[highcharts-svelte] No options provided to the HighchartsSvelte component."
    );
    return;
  }
  if (!highcharts[constr]) {
    console.error(
      `[highcharts-svelte] The constructor '${constr}' does not exist within Highcharts`
    );
    return;
  }
  chart = highcharts[constr](chartContainer, options, callback);
});
onDestroy(() => {
  if (chart) {
    chart.destroy();
  }
});
$:
  if (chart && chart.update && options) {
    chart.update(structuredClone(options), true, true, updateArgs);
  }
</script>

<div bind:this={chartContainer}></div>
