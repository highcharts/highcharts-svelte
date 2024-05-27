import { SvelteComponentTyped } from "svelte";
import * as Highcharts from 'highcharts';
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
export type GanttChartProps = typeof __propDef.props;
export type GanttChartEvents = typeof __propDef.events;
export type GanttChartSlots = typeof __propDef.slots;
export default class GanttChart extends SvelteComponentTyped<GanttChartProps, GanttChartEvents, GanttChartSlots> {
}
export {};
