import { AuthExpiredError } from '../errors';

export const SPOTIFY_API_HOST = 'https://api.spotify.com';
export const SPOTIFY_VERSION = 'v1';

export interface SpotifyUserObject {
  country: string;
  display_name: string;
  email: string;
  href: string;
  id: string;
  product: string;
  type: string;
  uri: string;
}

export interface SpotifyPlaylistObject {
  description: string;
  href: string;
  id: string;
  name: string;
  tracks: string;
  type: string;
  uri: string;
}
export interface SpotifyPagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: string;
  previous: string;
  total: number;
}

export interface SpotifyAlbumObjectSimple {
  album_type: 'album' | 'single' | 'compilation';
  artists: SpotifyArtistObjectSimple[];
  href: string; // A link to the Web API endpoint providing full details of the album.
  name: string;
  release_date: string;
  type: 'album';
  uri: string;
}

export interface SpotifyArtistObjectSimple {
  href: string; // A link to the Web API endpoint providing full details of the artist.
  id: string;
  name: string;
  type: 'artist';
  uri: string;
}

export interface SpotifyArtistObject {
  name: string;
  id: string;
  href: string; // A link to the Web API endpoint providing full details of the artist.
  type: 'artist';
  uri: string;
}

export interface SpotifyTrackObject {
  album: SpotifyAlbumObjectSimple; 
  artists: SpotifyArtistObjectSimple[];
  duration_ms: number;
  href: string; // A link to the Web API endpoint providing full details of the track.
  id: string;  
  name: string;  
  popularity: number;
  track_number: number;
  type: 'track';
  uri: string;
}

type TimeRange = 'long_term' | 'medium_term' | 'short_term';

export abstract class SpotifyAPI {
  constructor(public apiKey: string) {}

  public abstract async getPlaylists(): Promise<SpotifyPlaylistObject[]>;
  public abstract async getPlaylistTracks(playlistId: string): Promise<SpotifyTrackObject[]> ;
  public abstract async me(): Promise<SpotifyUserObject>;
  public async topArtists?(query?: any): Promise<SpotifyTrackObject[]>;

  public async getPlaylistArtists(playlistId: string): Promise<string[]> {
    const trackData = await this.getPlaylistTracks(playlistId);
    return extractArtistsFromTracks(trackData)
  }

  public async noAuthAPICall(url: string) {
    const res = await fetch(url);
    const json = await unpackResponse(res, url); 
    return json;
  }
}

export class SpotifyAuthTokenAPI extends SpotifyAPI {
  public getPlaylists() {
    return spotifyPlaylistsFromToken(this.apiKey)
  }

  public getPlaylistTracks(playlistId: string) {
    return spotifyTracksFromPlaylist(this.apiKey, playlistId)
  }

  public async me() {
    return spotifyMe(this.apiKey);
  }

  // public async topArtists(limit: string = '30', offset: string = '0', time_range: TimeRange = 'long_term') {
  public async topArtists({ limit = '50', offset = '0', time_range = 'medium_term' } = {}) {
    const data = await spotifyGETHelper<SpotifyTrackObject[]>(this.apiKey, ['me', 'top', 'artists'], {limit, offset, time_range});
    return data;
  }
}

export class SpotifyUserIdAPI extends SpotifyAPI {

  public async getPlaylists() {
    const url = apiurl('users', this.apiKey, 'playlists')
    return await this.noAuthAPICall(url);
  }

  public async getPlaylistTracks(playlistId: string) {
    const url = apiurl('playlists', this.apiKey, 'tracks')
    return await this.noAuthAPICall(url);
  }

  public async me() {
    const url = apiurl('users', this.apiKey);
    return await this.noAuthAPICall(url);
  }
}

interface SpotifyAuth {
  authToken: string,
  userId: string,
}
export function spotifyAPIFactory(spotifyAuthObj: Partial<SpotifyAuth>): SpotifyAPI | null {
  const { authToken, userId } = spotifyAuthObj; 
  if (authToken && authToken !== '') {
      return new SpotifyAuthTokenAPI(authToken)
  } else if (userId && userId !== '') {
      return new SpotifyUserIdAPI(userId)
  } else {
    return null;
  }  
}

export function apiurl(...endpoints: string[]): string {
  let epList = [SPOTIFY_VERSION, ...endpoints]
  let endpointString = epList.join('/');
  return new URL(endpointString, SPOTIFY_API_HOST).href
}

function handleError(e: any): never {
  throw e;
}

export async function unpackResponse(res: Response, url: string) {
  if (!res.ok) {
    if (res.status === 401) throw new AuthExpiredError(`Fetch for URL ${url} returned not ok status.  Status: ${res.status}`);
    throw new Error(`Fetch for URL ${url} returned not ok status.  Status: ${res.status}`)
  }
  if (res.status !== 200) {
    throw new Error(`Fetch for URL ${url} returned a status of ${res.status}`)
  }
  let json = await res.json().catch(handleError)
  return json;
}

export async function spotifyFetch(access_token: string, url: string) {
  let res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  }).catch(handleError);
  return unpackResponse(res, url);
}

type QueryParamsObject = {[k: string]: string}
function objectToQueryParams(queryObject?: QueryParamsObject): string {
  if (!queryObject) return '';
  const USP = new URLSearchParams();
  for (const k in queryObject) {
    USP.append(k, queryObject[k]);
  }
  return USP.toString();
}

async function spotifyGETHelper<T>(accessToken: string, urlParams: string[], queryParams?: QueryParamsObject): Promise<T> {
  const queryStr = objectToQueryParams(queryParams);
  const url = apiurl(...urlParams, `?${queryStr}`);
  const data = await spotifyFetch(accessToken, url).catch(handleError);
  if (!data.hasOwnProperty('items')) {
    throw new Error(`Returned paging object does not contain items field.  Url: ${url}`)
  }
  return data.items; 
}

export async function spotifyMe(accessToken: string): Promise<SpotifyUserObject> {
  const url = apiurl('me');
  const data = await spotifyFetch(accessToken, url);
  return data;
}

export async function spotifyPlaylistsFromToken(accessToken: string): Promise<SpotifyPlaylistObject[]> {
  return spotifyGETHelper(accessToken, ['me', 'playlists']);
}

export interface SpotifyPlaylistTrackObject {
  track: SpotifyTrackObject;
}
export async function spotifyTracksFromPlaylist(accessToken: string, playlist_id: string): Promise<SpotifyTrackObject[]> {
  const res = await spotifyGETHelper<SpotifyPlaylistTrackObject[]>(accessToken, ['playlists', playlist_id, 'tracks']);
  // Strip off the PlaylistTrackObject information
  return res.map(playlistTrackObject => playlistTrackObject.track)
}

export function extractArtistsFromTracks(tracks: SpotifyTrackObject[]): string[] {
  let artistsSet = new Set<string>();
  tracks.forEach(track => {
    artistsSet.add(track.artists[0].name)
  });
  return [...artistsSet];
}
