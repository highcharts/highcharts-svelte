import { SvelteComponentTyped } from "svelte";
import * as Highcharts from 'highcharts';
declare const __propDef: {
    props: {
        constr?: ("chart" | "stockChart" | "mapChart" | "ganttChart") | undefined;
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
export type HighchartsSvelteProps = typeof __propDef.props;
export type HighchartsSvelteEvents = typeof __propDef.events;
export type HighchartsSvelteSlots = typeof __propDef.slots;
export default class HighchartsSvelte extends SvelteComponentTyped<HighchartsSvelteProps, HighchartsSvelteEvents, HighchartsSvelteSlots> {
}
export {};
