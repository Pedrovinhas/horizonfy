export interface IAlbum {
    id?: string;
    name: string;
    artist: IArtist
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
