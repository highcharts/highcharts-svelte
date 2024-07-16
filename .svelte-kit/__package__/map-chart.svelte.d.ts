import { SvelteComponentTyped } from "svelte";
import * as Highcharts from 'highcharts/highmaps';
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
export type MapChartProps = typeof __propDef.props;
export type MapChartEvents = typeof __propDef.events;
export type MapChartSlots = typeof __propDef.slots;
export default class MapChart extends SvelteComponentTyped<MapChartProps, MapChartEvents, MapChartSlots> {
}
export {};
