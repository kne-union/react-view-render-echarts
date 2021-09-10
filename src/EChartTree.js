import * as echarts from 'echarts/core';
import {TreeChart} from 'echarts/charts';
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
    TreeChart,
    CanvasRenderer
]);

export default createEChart(echarts);