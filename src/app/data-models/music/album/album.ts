import {Song} from '../song/song';

export interface Album {
  id: string;
  name: string;
  coverArt: string;
  songs: Song[];
}
