import { formatPhoneNumber } from "../global";

/**
 * Generate a link to open the device's default phone app optionally prefixed with a numeric country code
 * @param number phone number including area code excluding country code
 * @param countryCode numeric country code (not including the +)
 */
export const tel = (number: string, countryCode?: string): string =>
  encodeURI(`tel:${formatPhoneNumber(number, { countryCode })}`);
