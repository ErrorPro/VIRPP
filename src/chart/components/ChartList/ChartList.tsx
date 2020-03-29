import React, { useState, Dispatch, SetStateAction } from 'react';
import { Chart } from 'src/chart/types';
import TrackList from 'src/chart/components/TrackList';

import './index.css';

type ListProps = {
  list: Array<Chart>;
};

export default ({ list }: ListProps) => {
  // this should be done via redux and should load tracks only if they needed.
  const [currentChart, setChart]: [
    Chart,
    Dispatch<SetStateAction<Chart>>
  ] = useState(list[0]);

  return (
    <div className="chart_container">
      <div className="chart_header_container">
        <h3 className="chart_header_title">Weekly charts</h3>
        <div>
          <input
            id="search_input"
            className="chart_search_input"
            type="text"
            placeholder="Search Charts"
          />
          <label htmlFor="search_input">
            <img className="chart_search_image" src={require('./search.png')} />
          </label>
        </div>
      </div>
      <div className="chart_list_container">
        <ul className="chart_list_container_column chart_list_container_charts">
          {list.map((e: Chart) => (
            <li
              key={e.id}
              style={{ color: currentChart.id === e.id ? 'red' : 'black' }}
              onClick={() => setChart(e)}
            >
              {e.title}
            </li>
          ))}
        </ul>
        <div className="chart_list_container_column chart_list_container_tracks">
          <TrackList chart={currentChart} />
        </div>
      </div>
    </div>
  );
};
