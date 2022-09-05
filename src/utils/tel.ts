export const tel = (number: string, countryCode?: string): string =>
  encodeURI(`tel:${countryCode ? `+${countryCode}` : ""}${number}`);
