export const spotify = {
  /**
   * Generate a link to open the an artist, album, or track on Spotify
   * @param type type of the Spotify entity
   * @param id id of the Spotify entity
   */
  media: (type: "artist" | "album" | "track", id: string) =>
    encodeURI(`spotify:${type}:${id}`),
  /**
   * Generate a link to search for a query on Spotify
   * @param query query to search for
   */
  search: (query: string) => encodeURI(`spotify:search:${query}`),

  /**
   * Generate a link to open the Spotify app to a specific user
   * @param id id of the Spotify user
   */
  user: (id: string) => encodeURI(`spotify:user:${id}`),

  /**
   * Generate a link to open the Spotify app to a specific playlist
   * @param userId id of the Spotify user who owns the playlist
   * @param playlistId id of the Spotify playlist
   */
  playlist: (id: string) => encodeURI(`spotify:playlist:${id}`),
};
