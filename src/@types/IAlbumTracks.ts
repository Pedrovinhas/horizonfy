import { ITracks } from './ITracks';

export interface IAlbumTracks {
    id?: string;
    name: string;
    tracks: ITracks
    artists: {
        name: string;
      }[];
    external_urls: {
      spotify: string;
    };
    images: [
        big: {
            url: string
        },
        medium: {
            url: string
        },
        small: {
            url: string;
        }
    ];
    release_date: string;
    total_tracks: number;
}

interface IArtist {
    name:string;
}
