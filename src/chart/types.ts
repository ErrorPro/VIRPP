// This is a file for types which belong to this domain.
// This file could be extended into more specific ones

export type Track = {
  id: string;
  title: string;
  likes: number;
  artist: string;
  rate: number;
};

export type Chart = {
  id: string;
  title: string;
  tracks: Array<Track>;
};

export interface State {
  list: Array<Chart>;
}

// ACTIONS TYPES
export type FetchList = {
  type: String;
  d: Array<Chart>;
};
