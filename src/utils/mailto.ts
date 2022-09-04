import { paramify } from "../global";

export const mailto = (
  address: string,
  options: {
    subject?: string;
    body?: string;
    cc?: string[];
    bcc?: string[];
  } = {}
): string => encodeURI(`mailto:${address}`) + paramify(options);
