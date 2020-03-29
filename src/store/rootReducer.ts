import { combineReducers, Reducer } from 'redux';

import { AppState } from 'src/store/types';
import chart from 'src/chart/redux/reducer';

const rootReducer: Reducer<AppState> = combineReducers({
  chart,
});

export default rootReducer;
