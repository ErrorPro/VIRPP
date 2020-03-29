import React from 'react';
import { Track } from 'src/chart/types';

import './index.css';

type TrackItemProps = {
  track: Track;
};

export default ({
  track: { title, likes, id, rate, artist },
}: TrackItemProps) => (
  <div className="track_item">
    <div className="track_item_number">
      <span className="track_item_number_id">{id}</span>
      {rate ? <span className="track_item_number_rate">{rate}</span> : null}
    </div>
    <img src={require('./cover.png')} />
    <div className="track_item_info">
      <span className="track_item_info_title">{title}</span>
      <span>{artist}</span>
    </div>
    <div className="track_item_rate">
      <img className="track_item_rate_img" src={require('./heart.png')} />
      <span>{likes}</span>
    </div>
  </div>
);
