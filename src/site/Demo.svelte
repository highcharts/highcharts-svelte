<script lang="ts">
    import 'tailwindcss/tailwind.css';
    import '../app.css';
    import { fade } from 'svelte/transition';

    import Highcharts from 'highcharts';
    import ExportingModule from 'highcharts/modules/exporting';
    import HighchartsSvelte from '../component/HighchartsSvelte.svelte';

    // Adding a module
    ExportingModule(Highcharts);

    let title = 'Highcharts works with Svelte!';
    let subtitle = 'Use this integration to make it super-easy.'
    let seriesType: 'line' | 'area' | 'areaspline' | 'column' = 'areaspline';
    let seriesColor = '#c85de3';
    let seriesData = [1, 4, 2, 4, 4, 5];
    let legendEnabled = false;
    let exportingEnabled = true;
    let zoomEnabled = false;

    let options: Highcharts.Options;
    let selectedTab = 'code';

    $: options = {
        chart: {
            zooming: {
                type: zoomEnabled ? 'xy' : undefined
            }
        },
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
            enabled: legendEnabled
        },
        exporting: {
            enabled: exportingEnabled
        }
    }
</script>

<div class="py-12">
    <div class="max-w-xl mx-auto px-4 py-4 border border-gray-300 rounded-2xl overflow-hidden mb-8 shadow-sm">
        <HighchartsSvelte options={options} highcharts={Highcharts}/>
    </div>

    <div class="max-w-xl mx-auto px-6 py-6 border rounded-2xl shadow-sm mb-8 {selectedTab === 'code' ? 'bg-gray-600 border-gray-900 text-white' : 'border-gray-300'}">
        <div class="mb-6">
            <div class="sm:hidden">
                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                <select
                    id="tabs"
                    class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    bind:value={selectedTab}>
                    <option value="customize">Customize</option>
                    <option value="code">Code</option>
                </select>
            </div>
            <div class="hidden sm:block">
                <nav class="flex space-x-2" aria-label="Tabs">
                    <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" -->
                    {#if selectedTab === 'customize'}
                        <button
                            class="flex gap-1.5 items-center bg-indigo-100 text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
                            on:click={() => selectedTab = 'customize'}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600 fill-indigo-600" viewBox="0 0 512 512"><path d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="144" cy="208" r="32"/><circle cx="152" cy="311" r="32"/><circle cx="224" cy="144" r="32"/><circle cx="256" cy="367" r="48"/><circle cx="328" cy="144" r="32"/></svg>
                            Customize
                        </button>
                        <button
                            class="flex gap-1.5 items-center bg-gray-50 hover:bg-gray-200 text-gray-500 hover:text-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                            on:click={() => selectedTab = 'code'}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"/></svg>
                            <span>Code</span>
                        </button>
                    {:else}
                        <button
                            class="flex gap-1.5 items-center bg-gray-500/50 text-gray-200 rounded-md px-3 py-2 text-sm font-medium"
                            on:click={() => selectedTab = 'customize'}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-200 fill-gray-200" viewBox="0 0 512 512"><path d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="144" cy="208" r="32"/><circle cx="152" cy="311" r="32"/><circle cx="224" cy="144" r="32"/><circle cx="256" cy="367" r="48"/><circle cx="328" cy="144" r="32"/></svg>
                            Customize
                        </button>
                        <button
                            class="flex gap-1.5 items-center bg-indigo-500 text-gray-100 hover:text-gray-200 rounded-md px-3 py-2 text-sm font-medium"
                            on:click={() => selectedTab = 'code'}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"/></svg>
                            <span>Code</span>
                        </button>
                    {/if}
                </nav>
            </div>
        </div>

        {#if selectedTab === 'code'}
<pre class="overflow-x-auto"><code>&lt;script lang="ts"&gt;
    import Highcharts from 'highcharts';
    import ExportingModule from 'highcharts/modules/exporting';
    import HighchartsSvelte from 'highcharts-svelte';

    // Adding a module
    ExportingModule(Highcharts);

    let title = 'Highcharts works with Svelte!';
    let subtitle = 'Use this integration to make it super-easy.'
    let seriesType: 'line' | 'area' | 'areaspline' | 'column' = 'areaspline';
    let seriesColor = '#c85de3';
    let seriesData = [1, 4, 2, 4, 4, 5];
    let legendEnabled = false;
    let exportingEnabled = true;
    let zoomEnabled = false;

    let options: Highcharts.Options;

    $: options = &lbrace;
        chart: &lbrace;
            zooming: &lbrace;
                type: zoomEnabled ? 'xy' : undefined
            &rbrace;
        &rbrace;,
        title: &lbrace;
            text: title
        &rbrace;,
        subtitle: &lbrace;
            text: subtitle
        &rbrace;,
        series: [&lbrace;
            type: seriesType,
            color: seriesColor,
            data: seriesData
        &rbrace;],
        legend: &lbrace;
            enabled: legendEnabled
        &rbrace;,
        exporting: &lbrace;
            enabled: exportingEnabled
        &rbrace;
    &rbrace;
&lt;/script&gt;

&lt;HighchartsSvelte options=&lbrace;options&rbrace; highcharts=&lbrace;Highcharts&rbrace;/&gt;

&lt;input
    type="text"
    name="Title"
    id="series-title"
    placeholder="Enter the title for your chart..."
    bind:value=&lbrace;title&rbrace;/&gt;</code></pre>
        {:else}
            <div>
                <h2 class="font-semibold text-xl mb-4">
                    Customize your chart dynamically
                </h2>

                <div class="flex flex-col gap-4">
                    <div>
                        <label for="series-title" class="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <input
                            type="text"
                            name="Title"
                            id="series-title"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter the title for your chart..."
                            bind:value={title}>
                    </div>
                    <div>
                        <label for="series-subtitle" class="block text-sm font-medium leading-6 text-gray-900">
                            Subtitle
                        </label>
                        <input
                            type="text"
                            name="Subtitle"
                            id="series-subtitle"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter the title for your chart..."
                            bind:value={subtitle}>
                    </div>
                    <div>
                        <label for="series-color" class="block text-sm font-medium leading-6 text-gray-900">
                            Color of the series
                        </label>
                        <input
                            type="color"
                            id="series-color"
                            class="mt-1 block py-1 px-2 rounded-md border-0 text-gray-900 ring-1 ring-inset bg-gray-100 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            bind:value={seriesColor}>
                    </div>
                    <div>
                        <label for="series-type" class="block text-sm font-medium leading-6 text-gray-900">
                            Series type
                        </label>
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
                    <div class="h-[1px] w-full bg-gray-200 my-4"></div>
                    <div class="flex flex-col gap-4">
                        <label class="flex items-center gap-3">
                            <span class="flex justify-center items-center text-sm font-medium text-gray-900 mt-1">
                                Legend enabled
                            </span>
                            <button
                                type="button"
                                class="{legendEnabled ? 'bg-indigo-600' : 'bg-gray-200'} mt-1 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer
                                    rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
                                    focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                on:click={() => legendEnabled = !legendEnabled}>
                                <span
                                    aria-hidden="true"
                                    class="{legendEnabled ? 'translate-x-5 ' : 'translate-x-0 '} pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                            </button>
                        </label>

                        <label class="flex items-center gap-3">
                            <span class="flex justify-center items-center text-sm font-medium text-gray-900 mt-1">
                                Zoom enabled
                            </span>
                            <button
                                type="button"
                                class="{zoomEnabled ? 'bg-indigo-600' : 'bg-gray-200'} mt-1 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer
                                    rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
                                    focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                on:click={() => zoomEnabled = !zoomEnabled}>
                                <span
                                    aria-hidden="true"
                                    class="{zoomEnabled ? 'translate-x-5 ' : 'translate-x-0 '} pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                            </button>
                        </label>

                        <label class="flex items-center gap-3">
                            <span class="flex justify-center items-center text-sm font-medium text-gray-900 mt-1">
                                Exporting menu
                            </span>
                            <button
                                type="button"
                                class="{exportingEnabled ? 'bg-indigo-600' : 'bg-gray-200'} mt-1 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer
                                    rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
                                    focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                on:click={() => exportingEnabled = !exportingEnabled}>
                                <span
                                    aria-hidden="true"
                                    class="{exportingEnabled ? 'translate-x-5 ' : 'translate-x-0 '} pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
