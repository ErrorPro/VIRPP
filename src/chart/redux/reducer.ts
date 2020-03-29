import createReducer from 'src/utils/createReducer';

import { State } from 'src/chart/types';

import { FETCH_LISTS } from './actions';

export const INITIAL_STATE: State = {
  list: [],
};

export default createReducer(INITIAL_STATE, {
  [FETCH_LISTS]: (state: State, { d }): State => ({
    ...state,
    list: d,
  }),
});
