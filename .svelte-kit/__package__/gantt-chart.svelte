<script>import cloneDeep from "lodash.clonedeep";
import * as Highcharts from "highcharts";
import GanttModule from "highcharts/modules/gantt";
import { onMount, onDestroy } from "svelte";
export let options;
export let updateArgs = true;
export let highcharts = Highcharts;
export let callback = () => {
};
export let chart = null;
GanttModule(highcharts);
let chartContainer;
onMount(() => {
  if (!chartContainer) {
    console.error(`[highcharts-svelte] Could not find the chart's container.`);
    return;
  }
  if (!options) {
    console.error(
      "[highcharts-svelte] No options provided to the HighchartsSvelte component."
    );
    return;
  }
  chart = highcharts.ganttChart(chartContainer, options, callback);
});
onDestroy(() => {
  if (chart) {
    chart.destroy();
  }
});
$:
  if (chart && chart.update && options) {
    chart.update(cloneDeep(options), true, true, updateArgs);
  }
</script>

<div bind:this={chartContainer}></div>
