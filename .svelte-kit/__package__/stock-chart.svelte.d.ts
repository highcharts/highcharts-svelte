import { SvelteComponentTyped } from "svelte";
import * as Highcharts from 'highcharts/highstock';
declare const __propDef: {
    props: {
        options: Highcharts.Options;
        updateArgs?: boolean | Partial<Highcharts.AnimationOptionsObject> | undefined;
        highcharts?: typeof Highcharts | undefined;
        callback?: ((chart: Highcharts.Chart) => void) | undefined;
        chart?: Highcharts.Chart | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StockChartProps = typeof __propDef.props;
export type StockChartEvents = typeof __propDef.events;
export type StockChartSlots = typeof __propDef.slots;
export default class StockChart extends SvelteComponentTyped<StockChartProps, StockChartEvents, StockChartSlots> {
}
export {};
