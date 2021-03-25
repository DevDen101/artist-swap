import {Album} from './album/album';

export interface Music {
  streams?: string;
  albums: Album[];
}
