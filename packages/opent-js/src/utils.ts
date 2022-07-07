export const stripTrailingSlash = (url: string): string =>
  url.replace(/\/$/, "");
