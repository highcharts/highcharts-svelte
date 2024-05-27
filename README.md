# @highcharts/svelte

A lightweight Svelte wrapper for Highcharts, making it easy to integrate Highcharts into your Svelte applications. This package allows you to utilize all the powerful features of Highcharts with the minimalistic approach of Svelte.

## Features

-   Simple and easy integration of Highcharts with Svelte.
-   Supports all Highcharts variants including `chart`, `stockChart`, `mapChart`, and `ganttChart`.
-   Supports all the Highcharts options (https://api.highcharts.com/highcharts/)

## Installation

You can install `@highcharts/svelte` using npm:

```bash
npm install @highcharts/svelte highcharts --save
```

Highcharts is a peer dependency of this package, and you need to install it separately.

## Usage

The package exports the `Chart`, `StockChart`, `MapChart`, `GanttChart` components which accepts 6 props:
| Prop | Type | Default | Description |
|--------------|--------------------------------------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `options` | `Highcharts.Options` | None | The configuration options for the chart. This is a required prop that defines the [Highcharts chart options](https://api.highcharts.com/highcharts/). |
| `updateArgs` | `boolean \| Partial<Highcharts.AnimationOptionsObject>` | `true` | Determines how the chart updates when the `options` object changes. Can be a boolean or an animation settings object to enable/disable animation during update. |
| `highcharts` | `typeof Highcharts` | `Highcharts` | Allows passing a custom instance of Highcharts, which is useful if you want to use a specific version of Highcharts or need to load modules that are not included by default. |
| `callback` | `(chart: Highcharts.Chart) => void` | `() => {}` | A callback function that is executed after the chart is instantiated. It receives the chart instance as a parameter. |
| `chart` | `Highcharts.Chart \| null` | `null` | If you'd like to have access to the chart instance, you can bind your chart object with Svelte's two-way binding here. |

## Example

```Svelte
<script lang="ts">
    import Highcharts from 'highcharts';
    import ExportingModule from 'highcharts/modules/exporting';
    import { Chart } from '@highcharts/svelte'; // Chart is also exported by default

    // Applying a certain Highcharts module
    ExportingModule(Highcharts);

    let options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'My Chart'
        },
        series: [{
            data: [1, 2, 3, 4, 5]
        }]
    };
</script>

<Chart options={options} highcharts={Highcharts}/>
```

## Contributing

Contributions are always welcome! Whether it's submitting a bug report, a pull request, or even suggesting a new feature, all contributions are appreciated. Before contributing, please read the project's contribution guidelines.

## Support

If you have any issues with @highcharts/svelte, please open an issue on the GitHub repository. If you have a Highcharts-related question, feel free to contact our support team: https://www.highcharts.com/blog/support/

## Helpful resources

-   Highcharts API: https://api.highcharts.com/highcharts/
-   Highcharts docs: https://www.highcharts.com/docs/index
-   Highcharts demos: https://www.highcharts.com/demo
