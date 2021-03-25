import {Music} from '../music/music';


export interface User {
  userId: string;
  emailAddress: string;
  artistType: UserType;
  music: Music;
}

interface UserType {
  enum: 'Artist' | 'Producer';
}
