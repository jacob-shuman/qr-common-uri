import { formatPhoneNumber } from "../global";

/**
 * Generate a link to open the device's default messaging app with optionally prefilled message
 * @param number phone number including area code excluding country code
 * @param options additional optional prefilled message and country code
 */
export const sms = (
  number: string,
  options: {
    countryCode?: string;
    message?: string;
  } = {}
): string =>
  encodeURI(
    "sms:" +
      formatPhoneNumber(number, options) +
      `${options?.message ? `:${options?.message}` : ""}`
  );
