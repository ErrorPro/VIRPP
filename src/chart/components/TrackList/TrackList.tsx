import React from 'react';
import { Chart } from 'src/chart/types';
import TrackItem from 'src/chart/components/TrackItem';

import './index.css';

type TrackListProps = {
  chart: Chart;
};

export default ({ chart: { tracks } }: TrackListProps) => (
  <div className="track_list">
    <div className="track_list_header">
      <img className="track_list_header_img" src={require('./header.png')} />
    </div>
    <div>
      {tracks.map(e => (
        <TrackItem key={e.id} track={e} />
      ))}
    </div>
  </div>
);
