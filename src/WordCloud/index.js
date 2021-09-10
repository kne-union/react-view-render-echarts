import React, {useEffect, useRef} from "react";
import {applyVariable} from '@kne/react-view-render';
import WordCloud from 'wordcloud';

const ReactWordCloud = ({onReady, options, ...props}) => {
    const ref = useRef(null);
    useEffect(() => {
        WordCloud(ref.current, options);
        return () => {
            WordCloud.stop();
        };
    }, [options]);
    return <canvas ref={ref} {...props} />;
};

export default applyVariable(ReactWordCloud);