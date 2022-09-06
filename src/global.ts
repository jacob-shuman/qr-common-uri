export const paramifyValue = (value: any): string =>
  Array.isArray(value)
    ? value.map(encodeURIComponent).join(",")
    : encodeURIComponent(value);

export const paramify = (rawParams: Record<string, any> = {}): string => {
  const params = Object.entries(rawParams)
    .map(([k, v]) => `${k}=${paramifyValue(v)}`)
    .join("&");

  return (params.length ? "?" : "") + params;
};

export const formatPhoneNumber = (
  number: string,
  options: { countryCode?: string } = {}
): string => (options?.countryCode ? `+${options?.countryCode}` : "") + number;
