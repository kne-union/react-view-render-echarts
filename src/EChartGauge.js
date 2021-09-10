import * as echarts from 'echarts/core';
import {GaugeChart} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';
import createEChart from "./createEChart";

echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    GaugeChart,
    CanvasRenderer
]);

export default createEChart(echarts);