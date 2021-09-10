import * as echarts from 'echarts/core';
import {RadarChart} from 'echarts/charts';
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
    RadarChart,
    CanvasRenderer
]);

export default createEChart(echarts);