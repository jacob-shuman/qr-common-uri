/**
 * Generate a link to open the device's default map app such as Google Maps, Apple Maps, Waze, etc
 * @param latitude latitude of the location
 * @param longitude longitude of the location
 * @param options optional altitude and uncertainty of the location
 */
export const geo = (
  latitude: number,
  longitude: number,
  options: {
    altitude?: number;
    uncertainty?: number;
  } = {}
): string =>
  encodeURI(
    `geo:${latitude},${longitude}${
      options?.altitude ? `,${options?.altitude}` : ""
    }${options?.uncertainty ? `;u=${options?.uncertainty}` : ""}`
  );
