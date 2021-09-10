import React, {useEffect, useRef} from "react";
import ResizeObserver from "rc-resize-observer";
import {applyVariable} from '@kne/react-view-render';

const createEChart = (echarts) => applyVariable(({onReady, options, ...props}) => {
    const ref = useRef(null);
    const echartRef = useRef(null);
    useEffect(() => {
        const chart = echarts.init(ref.current);
        echartRef.current = chart;
        chart.setOption(options);
        onReady && onReady(chart);
        return () => {
            chart.dispose();
        };
    }, [options]);
    return <ResizeObserver onResize={() => {
        echartRef.current && echartRef.current.resize();
    }}>
        <div ref={ref} {...props} />
    </ResizeObserver>
});

export default createEChart;