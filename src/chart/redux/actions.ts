import { FetchList, Chart } from 'src/chart/types';

export const FETCH_LISTS = 'FETCH_LISTS';

export const fetchLists = (d: Array<Chart>): FetchList => ({
  type: FETCH_LISTS,
  d,
});
