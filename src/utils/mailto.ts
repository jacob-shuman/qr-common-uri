import { paramify } from "../global";

/**
 * Generate a link to open the device's default mail client with prefilled `options`
 * @param address recipient addresses
 * @param options additional prefilled fields
 */
export const mailto = (
  addresses: string[],
  options: {
    subject?: string;
    body?: string;
    cc?: string[];
    bcc?: string[];
  } = {}
): string =>
  encodeURI(`mailto:${addresses.map(encodeURI).join(",")}`) + paramify(options);
