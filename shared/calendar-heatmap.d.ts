// F:\Projects\JLPT-N5\types\react-calendar-heatmap.d.ts

declare module 'react-calendar-heatmap' {
    import * as React from 'react';

    export interface Props {
        values: any[];
        startDate: Date | string | number;
        endDate: Date | string | number;
        classForValue?: (value: any) => string;
        showWeekdayLabels?: boolean;
        tooltipDataAttrs?: (value: any) => any;
        titleForValue?: (value: any) => string;
        onClick?: (value: any) => void;
    }

    export default class CalendarHeatmap extends React.Component<Props> {}
}