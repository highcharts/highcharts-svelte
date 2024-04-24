<script lang="ts">
    import * as Highcharts from 'highcharts';
    import GanttModule from 'highcharts/modules/gantt';
    import { onMount, onDestroy } from 'svelte';

    export let options: Highcharts.Options;
    export let updateArgs: boolean | Partial<Highcharts.AnimationOptionsObject> = true;
    export let highcharts: typeof Highcharts = Highcharts;
    export let callback: (chart: Highcharts.Chart) => void = () => {};
    export let chart: Highcharts.Chart | null = null;

    GanttModule(highcharts);

    let chartContainer: HTMLElement;

    onMount(() => {
        if (!chartContainer) {
            console.error(`[highcharts-svelte] Could not find the chart's container.`);
            return;
        }

        if (!options) {
            console.error(
                '[highcharts-svelte] No options provided to the HighchartsSvelte component.'
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

    $: if (chart && chart.update && options) {
        chart.update(structuredClone(options), true, true, updateArgs);
    }
</script>

<div bind:this={chartContainer}></div>
