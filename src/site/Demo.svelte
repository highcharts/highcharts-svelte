<script lang="ts">
    import 'tailwindcss/tailwind.css';
    import '../app.css';

    import Highcharts from 'highcharts';
    import ExportingModule from 'highcharts/modules/exporting';
    import HighchartsSvelte from '../component/HighchartsSvelte.svelte';

    // Adding a module
    ExportingModule(Highcharts);

    let title = 'Highcharts works with Svelte!';
    let subtitle = 'Use this integration to make it super-easy.'
    let seriesType: 'line' | 'area' | 'areaspline' | 'column' = 'areaspline';
    let seriesColor = '#c85de3';
    let seriesData = [0, 4, 2, 4, 4, 5];
    let legendEnable = true;

    let options: Highcharts.Options;

    $: options = {
        title: {
            text: title
        },
        subtitle: {
            text: subtitle
        },
        series: [{
            type: seriesType,
            color: seriesColor,
            data: seriesData
        }],
        legend: {
            enabled: legendEnable
        }
    }
</script>

<div class="py-12">
    <div class="max-w-xl mx-auto px-4 py-4 border border-gray-300 rounded-2xl overflow-hidden mb-8">
        <HighchartsSvelte options={options} highcharts={Highcharts}/>
    </div>

    <div class="max-w-xl mx-auto px-6 py-7 border border-gray-300 rounded-2xl">
        <h2 class="font-bold text-2xl mb-4">Customize your chart dynamically</h2>
        <div class="space-y-4">
            <div>
                <label for="series-title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <input
                    type="text"
                    name="Title"
                    id="series-title"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter the title for your chart..."
                    bind:value={title}>
            </div>
            <div>
                <label for="series-subtitle" class="block text-sm font-medium leading-6 text-gray-900">Subtitle</label>
                <input
                    type="text"
                    name="Subtitle"
                    id="series-subtitle"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter the title for your chart..."
                    bind:value={subtitle}>
            </div>
            <div>
                <label for="series-color" class="block text-sm font-medium leading-6 text-gray-900">Color of the series</label>
                <input
                    type="color"
                    id="series-color"
                    class="mt-1 block py-1 px-2 rounded-md border-0 text-gray-900 ring-1 ring-inset bg-gray-100 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    bind:value={seriesColor}>
            </div>
            <div>
                <label for="series-type" class="block text-sm font-medium leading-6 text-gray-900">Series type</label>
                <select
                    id="series-type"
                    name="series-type"
                    class="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    bind:value={seriesType}>
                    <option value="line">Line</option>
                    <option value="area">Area</option>
                    <option value="areaspline">Areaspline</option>
                    <option value="column">Column</option>
                </select>
            </div>
            <div class="flex flex-col">
                 <span class="text-sm" id="annual-billing-label">
                    <span class="font-medium text-gray-900">Turn {legendEnable ? 'off' : 'on'} the legend</span>
                </span>
                <button
                    type="button"
                    class={`${legendEnable ? 'bg-indigo-600' : 'bg-gray-200'} mt-1 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
                    on:click={() => legendEnable = !legendEnable}>
                    <span
                        aria-hidden="true"
                        class={`${legendEnable ? 'translate-x-5 ' : 'translate-x-0 '} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
                </button>
            </div>
        </div>
    </div>
</div>
