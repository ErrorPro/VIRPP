import { connect } from 'react-redux';
import { AppState } from 'src/store/types';

import ChartList from './ChartList';

export default connect((state: AppState) => ({ list: state.chart.list }))(
  ChartList
);
