import ViewRender, {preset} from '@kne/react-view-render';
import echarts from '@kne/react-view-render-echarts';
import axios from 'axios';

preset.components(echarts);

const App = () => {
    return <ViewRender lib={{axios}} url="/react-view-render-echarts/test.json"/>;
};

export default App;