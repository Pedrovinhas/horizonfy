export interface ITracks {
    disc_number?: number;
    duration_ms: number;
    explicit?: boolean;
    external_urls?: {
      spotify: string;
    };
    id?: string;
    is_local?: boolean;
    name: string;
    preview_url: string | null;
    track_number: number;
    type?: string;
    uri?: string;
}[];