<script lang="ts">
    import * as Highcharts from 'highcharts';
    import { onMount, onDestroy } from 'svelte';

    type ChartConstructor = 'chart' | 'stockChart' | 'mapChart' | 'ganttChart';
    export let constr: ChartConstructor = 'chart';
    export let options: Highcharts.Options;
    export let updateArgs: boolean | Partial<Highcharts.AnimationOptionsObject> = true;
    export let highcharts: typeof Highcharts = Highcharts;
    export let callback: (chart: Highcharts.Chart) => void = () => {};

    export let chart: Highcharts.Chart | null = null;

    let chartContainer: HTMLElement;

    onMount(() => {
        if (!chartContainer) {
            console.error('[highcharts-svelte] Could not find the chart\'s container.');
            return;
        }

        if (!options) {
            console.error('[highcharts-svelte] No options provided to the HighchartsSvelte component.');
            return;
        }

        if (!(highcharts as any)[constr]) {
            console.error(`[highcharts-svelte] The constructor '${constr}' does not exist within Highcharts`);
            return;
        }

        // casting 'as any' as we do not need a type-check here
        // and we do not want to import all the Highcharts modules
        // to get different types for different constructor
        chart = (highcharts as any)[constr](chartContainer, options, callback);
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