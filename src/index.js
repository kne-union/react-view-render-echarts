import loadable from '@loadable/component';
import profile from './profile.json';
import wordCloudProfile from './WordCloud/profile.json';

export default [
    {
        component: loadable(() => import('./EChart')),
        profile: Object.assign({}, profile, {
            id: "EChart",
            name: "EChart图表"
        })
    },
    {
        component: loadable(() => import('./EChartBar')),
        profile: Object.assign({}, profile, {
            id: "EChartBar",
            name: "柱状图"
        })
    },
    {
        component: loadable(() => import('./EChartFunnel')),
        profile: Object.assign({}, profile, {
            id: "EChartFunnel",
            name: "漏斗图"
        })
    },
    {
        component: loadable(() => import('./EChartGauge')),
        profile: Object.assign({}, profile, {
            id: "EChartGauge",
            name: "仪表盘"
        })
    },
    {
        component: loadable(() => import('./EChartGraph')),
        profile: Object.assign({}, profile, {
            id: "EChartGraph",
            name: "关系图"
        })
    },
    {
        component: loadable(() => import('./EChartLine')),
        profile: Object.assign({}, profile, {
            id: "EChartLine",
            name: "折线图"
        })
    },
    {
        component: loadable(() => import('./EChartPie')),
        profile: Object.assign({}, profile, {
            id: "EChartPie",
            name: "饼图"
        })
    },
    {
        component: loadable(() => import('./EChartRadar')),
        profile: Object.assign({}, profile, {
            id: "EChartRadar",
            name: "雷达图"
        })
    },
    {
        component: loadable(() => import('./EChartScatter')),
        profile: Object.assign({}, profile, {
            id: "EChartScatter",
            name: "散点图"
        })
    },
    {
        component: loadable(() => import('./EChartTree')),
        profile: Object.assign({}, profile, {
            id: "EChartTree",
            name: "树图"
        })
    },
    {
        component: loadable(() => import('./WordCloud')),
        profile: wordCloudProfile
    }
];