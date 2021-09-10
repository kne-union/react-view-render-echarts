import * as echarts from 'echarts/core';
import {GraphChart} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';
import createEChart from "./createEChart";

echarts.use([
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    GraphChart,
    CanvasRenderer
]);

export default createEChart(echarts);